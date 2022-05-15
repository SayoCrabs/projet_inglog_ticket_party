import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {catchError, map, of} from "rxjs";
import {GenericState, GenericStateModel} from "../../../utils/models/GenericState";
import {ConnectionService} from "../service/connection.service";
import {CheckUser, CreateUser, DeleteUser, LoadUser, UpdateUser} from "../action/connection.action";
import {User} from "../../../utils/models/user";

export interface ConnectionStateModel extends GenericStateModel
{
  user: User,
  exist: boolean,
  creating: boolean,
  created: boolean
}

export const connectionInitialState = {
  user: null,
  exist: false,
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
  static user(state: ConnectionStateModel): User
  {
    return state.user;
  }

  // region Get

  @Action(CheckUser)
  isUserExist(ctx: StateContext<ConnectionStateModel>, action: CheckUser)
  {
    return this.connectionService.getUserIfExist(action.userName, action.password).pipe(
      map((exist: boolean) => this.userExistSuccess(ctx, exist)));
  }

  userExistSuccess(ctx: StateContext<ConnectionStateModel>, exist: boolean)
  {
    return ctx.patchState({
      exist: exist,
      ...GenericState.success()
    });
  }

  @Action(LoadUser)
  LoadUser(ctx: StateContext<ConnectionStateModel>, action: LoadUser)
  {
    return this.connectionService.loadUser(action.id).pipe(
      map((user: User) => this.LoadUserSuccess(ctx, user)));
  }

  LoadUserSuccess(ctx: StateContext<ConnectionStateModel>, user: User)
  {
    return ctx.patchState({
      user: user,
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
  DeleteTicket(ctx: StateContext<ConnectionStateModel>, action: DeleteUser)
  {
    return this.connectionService.deleteUser(action.userId);
  }

  @Action(UpdateUser)
  UpdateTicket(ctx: StateContext<ConnectionStateModel>, action: UpdateUser)
  {
    return this.connectionService.updateUser(action.id, action.changes);
  }
}
