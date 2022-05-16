import {Ticket} from "./Ticket";
import {Invoice} from "./Invoice";

export class InvoiceItem
{
  id: number = 0;

  quantity: number | undefined;

  invoice: Invoice | undefined | null;

  ticket: Ticket | undefined;

  price: number = 2;

  constructor(ticket: Ticket | undefined, nbBuy: number = 1) {
    this.ticket = ticket;
    this.quantity = nbBuy;
    this.price = 2;
    this.invoice = null;
  }
}
