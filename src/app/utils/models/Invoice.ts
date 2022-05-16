import {User} from './user';
import {InvoiceItem} from "./InvoiceItem";

export class Invoice
{
  id: number = 0;

  numberInvoice: number = 12;

  dateFacture: Date | undefined;

  client!: User;

  invoiceItems: InvoiceItem | undefined;

  constructor(invoice?: Invoice)
  {
    if(invoice)
    {
      const invoiceItemRequest = new InvoiceItem();
      invoiceItemRequest.quantity = invoice.invoiceItems?.quantity;
      invoiceItemRequest.ticket = invoice.invoiceItems?.ticket;

      this.dateFacture = invoice.dateFacture;
      this.client = new User(invoice.client);
      this.invoiceItems = invoiceItemRequest;
    }
  }

}
