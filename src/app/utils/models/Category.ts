import {Ticket} from "./Ticket";

export class Category
{
  public id: number | undefined;

  public description: string = 'default';

  public tickets: Ticket[] | undefined;

  constructor(desc: string) {
    this.description = desc;
    // at the creation we can't now the number of tickets
    this.tickets = [];
  }

}
