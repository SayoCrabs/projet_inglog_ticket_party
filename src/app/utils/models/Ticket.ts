import {Category} from "./Category";

export class Ticket
{
  public id: string = '';

  public title: string = '';

  public price: number | undefined;

  public quantite: number = 0;

  public startDate : Date;

  public endDate: Date;

  public position: string | undefined;

  public limitAge: number = 1;

  public category: Category;

  constructor(newTicket: Ticket, desc: string = '') {
    console.log(newTicket);
    this.id = newTicket.id;
    this.title = newTicket.title;
    this.price = newTicket.price;
    this.quantite = newTicket.quantite;
    this.startDate = newTicket.startDate;
    this.endDate = newTicket.endDate;
    this.position = newTicket.position;
    this.limitAge = newTicket.limitAge;
    this.category = new Category(desc);
  }

  modify(ticket:Ticket, value: string)
  {
    ticket.quantite = Number(value);
    return ticket;
  }
}
