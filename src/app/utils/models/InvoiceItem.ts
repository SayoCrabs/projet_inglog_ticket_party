import {Ticket} from "./Ticket";
import {Invoice} from "./Invoice";

export class InvoiceItem
{
  id: number = 0;

  quantity: number | undefined;

  invoice: Invoice | undefined;

  ticket: Ticket | undefined;

  constructor() {
  }
}
