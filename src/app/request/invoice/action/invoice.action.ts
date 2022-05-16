import {Invoice} from "../../../utils/models/Invoice";

export const LOAD_ALL_INVOICES = '[Invoices] Load all invoices';
export const UPDATE_INVOICE = '[Invoice] Update invoice';
export const DELETE_INVOICE = '[Invoice] Delete invoice';
export const CREATE_INVOICE = '[Invoice] Create invoice';


export class LoadAllInvoices
{
  static readonly type = LOAD_ALL_INVOICES;

  constructor()
  {
  }
}

export class UpdateInvoice
{
  static readonly type = UPDATE_INVOICE;

  constructor(public id: number, public changes: Invoice)
  {
  }
}

export class DeleteInvoice
{
  static readonly type = DELETE_INVOICE;

  constructor(public invoiceId: number)
  {
  }
}

export class CreateInvoice
{
  static readonly type = CREATE_INVOICE;

  constructor(public req: Invoice)
  {
  }
}
