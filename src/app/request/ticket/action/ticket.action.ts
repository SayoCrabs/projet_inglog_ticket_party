import {Ticket} from "../../../utils/models/Ticket";

export const LOAD_ALL_TICKETS = '[Tickets] Load all tickets';
export const UPDATE_TICKET = '[Tickets] Update ticket';
export const DELETE_TICKET = '[Tickets] Delete ticket';
export const CREATE_TICKET = '[Tickets] Create ticket';


export class LoadAllTickets
{
  static readonly type = LOAD_ALL_TICKETS;

  constructor()
  {
  }
}

export class UpdateTicket
{
  static readonly type = UPDATE_TICKET;

  constructor(public id: string, public changes: Ticket)
  {
  }
}

export class DeleteTicket
{
  static readonly type = DELETE_TICKET;

  constructor(public ticketId: string, public ticket: Ticket)
  {
  }
}

export class CreateTicket
{
  static readonly type = CREATE_TICKET;

  constructor(public req: Ticket)
  {
  }
}
