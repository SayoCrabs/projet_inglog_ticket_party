export class Ticket
{
  public ticketId: number = 0;
  public title: string | undefined;
  public price: number | undefined;
  public nbTickets: number = 0;
  public address: string | undefined;

  constructor(newTicket: Ticket){
    this.ticketId = newTicket.ticketId;
    this.title = newTicket.title;
    this.price = newTicket.price;
    this.nbTickets = newTicket.nbTickets;
    this.address = newTicket.address;
  }
}
