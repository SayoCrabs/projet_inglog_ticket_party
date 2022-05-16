import {Ticket} from "./Ticket";

export class Category
{
  public id: number | undefined;

  public description: string = 'default';

  public tickets: Ticket[] | undefined;

  constructor(ticket: string) {
    this.description = ticket;
    this.tickets = [];
  }

}
