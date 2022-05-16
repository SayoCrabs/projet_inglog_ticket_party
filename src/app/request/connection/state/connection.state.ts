import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {catchError, map, of} from "rxjs";
import {GenericState, GenericStateModel} from "../../../utils/models/GenericState";
import {ConnectionService} from "../service/connection.service";
import {CheckUser, CreateUser, DeleteUser, LoadUser, ResetUser, UpdateUser} from "../action/connection.action";
import {User} from "../../../utils/models/user";

export interface ConnectionStateModel extends GenericStateModel
{
  user: User | null,
  users: User[],
  creating: boolean,
  created: boolean
}

export const connectionInitialState = {
  user: null,
  users: [],
  creating: false,
  created: false,
  ...GenericState.init()
};

@State({
  name: 'connectionInitialState',
  defaults: connectionInitialState
})

@Injectable()
export class ConnectionState extends GenericState
{
  constructor(private connectionService: ConnectionService) {
    super();
  }

  @Selector()
  static user(state: ConnectionStateModel): User | null
  {
    return state.user;
  }

  @Selector()
  static users(state: ConnectionStateModel): User[] | null
  {
    return state.users;
  }

  // region Get

  @Action(CheckUser)
  GetUserByEmailAndPassword(ctx: StateContext<ConnectionStateModel>, action: CheckUser)
  {
    return this.connectionService.getUserByEmailAndPassword(action.userName, action.password).pipe(
      map((user: User) => this.GetUserByEmailAndPasswordSuccess(ctx, user)));
  }

  GetUserByEmailAndPasswordSuccess(ctx: StateContext<ConnectionStateModel>, user: User)
  {
    return ctx.patchState({
      user: user,
      ...GenericState.success()
    });
  }

  @Action(LoadUser)
  LoadUser(ctx: StateContext<ConnectionStateModel>, action: LoadUser)
  {
    return this.connectionService.loadUsers().pipe(
      map((users: User[]) => this.LoadUserSuccess(ctx, users)));
  }

  LoadUserSuccess(ctx: StateContext<ConnectionStateModel>, users: User[])
  {
    return ctx.patchState({
      users: users,
      ...GenericState.success()
    });
  }

  // end region

  // region CREATE

  @Action(CreateUser)
  CreateTicket(ctx: StateContext<ConnectionStateModel>, action: CreateUser)
  {
    ctx.patchState({
      creating: true,
      ...GenericState.load()
    });

    return this.connectionService.createUser(action.req).pipe(
      map((user: User) => this.CreateUserSuccess(ctx, user)),
      catchError((error: any) => of(this.CreateUserError(ctx, error)))
    );
  }

  CreateUserSuccess(ctx: StateContext<ConnectionStateModel>, user: User)
  {
    return ctx.patchState({
      creating: false,
      created: true,
      user: user,
      ...GenericState.success()
    });
  }

  CreateUserError(ctx: StateContext<ConnectionStateModel>, error: any)
  {
    return ctx.patchState({
      creating: false,
      created: false,
      ...GenericState.error(error)
    });
  }

  // END CREATE

  @Action(DeleteUser)
  DeleteUser(ctx: StateContext<ConnectionStateModel>, action: DeleteUser)
  {
    return this.connectionService.deleteUser(action.userId);
  }

  @Action(UpdateUser)
  UpdateUser(ctx: StateContext<ConnectionStateModel>, action: UpdateUser)
  {
    return this.connectionService.updateUser(action.id, action.changes);
  }

  @Action(ResetUser)
  ResetUser(ctx: StateContext<ConnectionStateModel>)
  {
    return ctx.setState(connectionInitialState);
  }
}
