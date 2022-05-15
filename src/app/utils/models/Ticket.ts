export class Ticket
{
  public id: number = 0;

  public title: string | undefined;

  public entreprise: string | undefined;

  public price: number | undefined;

  public quantite: number = 0;

  public address: string | undefined;

  public startDate : Date | undefined;

  public endDate: Date | undefined;

  public position: string | undefined;


  constructor(newTicket: Ticket){
    this.id = newTicket.id;
    this.title = newTicket.title;
    this.entreprise = newTicket.entreprise;
    this.price = newTicket.price;
    this.quantite = newTicket.quantite;
    this.startDate = newTicket.startDate;
    this.endDate = newTicket.endDate;
    this.address = newTicket.address;
    this.address = newTicket.address;
  }
}
