import {User} from './user';

export class Invoice
{
  id: number | undefined;

  numberInvoice: number | undefined;

  dateFacture: Date | undefined;

  client: User | undefined;
}
