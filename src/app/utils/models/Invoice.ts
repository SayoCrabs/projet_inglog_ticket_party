import {User} from './user';
import {InvoiceItem} from "./InvoiceItem";

export class Invoice
{
  id: number = 0;

  numberInvoice: number = 12;

  dateFacture: Date | undefined;

  client!: User;

  invoiceItems: InvoiceItem | undefined;

  price: number = 3;

  constructor(invoice?: Invoice)
  {
    if(invoice)
    {
      this.dateFacture = invoice.dateFacture;
      this.client = new User(invoice.client);
      this.invoiceItems = new InvoiceItem(invoice.invoiceItems?.ticket, invoice.invoiceItems?.quantity);
      this.price = 3;
    }
  }

}
