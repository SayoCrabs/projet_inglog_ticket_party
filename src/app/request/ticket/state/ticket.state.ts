import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Ticket} from "../../../utils/models/Ticket";
import {CreateTicket, DeleteTicket, LoadAllTickets, UpdateTicket} from "../action/ticket.action";
import {GenericState} from "../../../utils/models/GenericState";

export interface TicketStateModel
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
  loading: false,
  loaded: false,
  translatedError: null
};

@State<TicketStateModel>({
  name: 'ticket',
  defaults: ticketInitialState
})

@Injectable()
export class TicketState extends GenericState
{

  @Selector()
  static tickets(state: TicketStateModel): Ticket[]
  {
    return state.tickets;
  }

  @Action(LoadAllTickets)
  LoadAllTickets(ctx: StateContext<TicketStateModel>)
  {

  }

  LoadAllTicketsSuccess(ctx: StateContext<TicketStateModel>)
  {

  }

  LoadAllTicketsError(ctx: StateContext<TicketStateModel>)
  {

  }

  @Action(CreateTicket)
  CreateTicket(ctx: StateContext<TicketStateModel>)
  {

  }

  CreateTicketSuccess(ctx: StateContext<TicketStateModel>)
  {

  }

  CreateTicketError(ctx: StateContext<TicketStateModel>)
  {

  }

  @Action(DeleteTicket)
  DeleteTicket(ctx: StateContext<TicketStateModel>)
  {

  }

  DeleteTicketSuccess(ctx: StateContext<TicketStateModel>)
  {

  }

  DeleteTicketError(ctx: StateContext<TicketStateModel>)
  {

  }

  @Action(UpdateTicket)
  UpdateTicket(ctx: StateContext<TicketStateModel>)
  {

  }

  UpdateTicketSuccess(ctx: StateContext<TicketStateModel>)
  {

  }

  UpdateTicketError(ctx: StateContext<TicketStateModel>)
  {

  }
}
