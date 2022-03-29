import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Ticket} from "../../../utils/models/Ticket";
import {LoadAllTickets} from "../action/ticket.action";
import {Observable} from "rxjs";
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
}
