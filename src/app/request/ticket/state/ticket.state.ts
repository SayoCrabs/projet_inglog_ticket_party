import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Ticket} from "../../../utils/models/Ticket";
import {CreateTicket, DeleteTicket, LoadAllTickets, UpdateTicket} from "../action/ticket.action";
import {GenericState, GenericStateModel} from "../../../utils/models/GenericState";
import {TicketService} from "../service/ticket.service";
import {catchError, map, of} from "rxjs";

export interface TicketStateModel extends GenericStateModel
{
  tickets: Ticket[];
  creating: boolean;
  created: boolean;
  translatedError: string | null;
}

export const ticketInitialState = {
  tickets: [],
  creating: false,
  created: false,
  translatedError: null
};

@State({
  name: 'ticket',
  defaults: ticketInitialState
})

@Injectable()
export class TicketState extends GenericState
{

  constructor(private createTicketService: TicketService) {
    super();
  }

  @Selector()
  static tickets(state: TicketStateModel): Ticket[]
  {
    return state.tickets;
  }

  @Action(LoadAllTickets)
  LoadAllTickets(ctx: StateContext<TicketStateModel>, action: LoadAllTickets)
  {
    return this.createTicketService.loadTickets().pipe(
      map((ticket: Ticket[]) => this.LoadTicketSuccess(ctx, ticket)));
  }

  LoadTicketSuccess(ctx: StateContext<TicketStateModel>, ticket: Ticket[])
  {
    return ctx.patchState({
      tickets: ticket,
      ...GenericState.success()
    });
  }

  @Action(CreateTicket)
  CreateTicket(ctx: StateContext<TicketStateModel>, action: CreateTicket)
  {
    ctx.patchState({
      creating: true,
      ...GenericState.load()
    });

    return this.createTicketService.createTicket(action.req).pipe(
      map((ticket: Ticket) => this.CreateTicketSuccess(ctx, ticket)),
      catchError((error: any) => of(this.CreateTicketError(ctx, error)))
    );
  }

  CreateTicketSuccess(ctx: StateContext<TicketStateModel>, ticket: Ticket)
  {
    return ctx.patchState({
      creating: false,
      created: true,
      tickets: [ ticket, ...ctx.getState().tickets ],
      ...GenericState.success()
    });
  }

  CreateTicketError(ctx: StateContext<TicketStateModel>, error: any)
  {
    return ctx.patchState({
      creating: false,
      created: false,
      translatedError: error,
      ...GenericState.error(error)
    });
  }

  @Action(DeleteTicket)
  DeleteTicket(ctx: StateContext<TicketStateModel>, action: DeleteTicket)
  {
    return this.createTicketService.deleteTicket(action.ticketId).pipe(
      map(_ => this.DeleteTicketSuccess(ctx, action.ticket))
    );
  }

  DeleteTicketSuccess(ctx: StateContext<TicketStateModel>, ticket: Ticket)
  {
    ctx.patchState({
      tickets: TicketState.tickets(ctx.getState()).filter(t => t !== ticket),
      ...GenericState.success()
    });
    console.log(ctx.getState().tickets);
  }

  @Action(UpdateTicket)
  UpdateTicket(ctx: StateContext<TicketStateModel>, action: UpdateTicket)
  {
    return this.createTicketService.updateTicket(action.id, action.changes).pipe(
      map((ticket) => this.UpdateTicketSuccess(ctx, ticket))
    );
  }

  UpdateTicketSuccess(ctx: StateContext<TicketStateModel>, ticket: Ticket)
  {
    return ctx.patchState({
      tickets:  [ ticket, ...ctx.getState().tickets.filter(t => t.id !== ticket.id) ]
    })
  }

}
