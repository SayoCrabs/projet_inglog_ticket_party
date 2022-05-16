import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {GenericState, GenericStateModel} from "../../../utils/models/GenericState";
import {catchError, map, of} from "rxjs";
import {InvoiceService} from "../service/invoice.service";
import {Invoice} from "../../../utils/models/Invoice";
import {CreateInvoice, DeleteInvoice, LoadAllInvoices, UnloadInvoice, UpdateInvoice} from "../action/invoice.action";
import {ConnectionStateModel} from "../../connection/state/connection.state";

export interface InvoiceStateModel extends GenericStateModel
{
  invoices: Invoice[];
  creating: boolean;
  created: boolean;
  translatedError: string | null;
}

export const invoiceInitialState = {
  invoices: [],
  creating: false,
  created: false,
  translatedError: null,
  ...GenericState.init()
};

@State({
  name: 'invoice',
  defaults: invoiceInitialState
})

@Injectable()
export class InvoiceState extends GenericState
{

  constructor(private invoiceService: InvoiceService) {
    super();
  }

  @Selector()
  static invoices(state: InvoiceStateModel): Invoice[]
  {
    return state.invoices;
  }

  @Action(LoadAllInvoices)
  LoadAllTickets(ctx: StateContext<InvoiceStateModel>, action: LoadAllInvoices)
  {
    return this.invoiceService.loadInvoices().pipe(
      map((invoice: Invoice[]) => this.LoadInvoiceSuccess(ctx, invoice)));
  }

  LoadInvoiceSuccess(ctx: StateContext<InvoiceStateModel>, invoice: Invoice[])
  {
    return ctx.patchState({
      invoices: invoice,
      ...GenericState.success()
    });
  }

  @Action(CreateInvoice)
  CreateInvoice(ctx: StateContext<InvoiceStateModel>, action: CreateInvoice)
  {
    ctx.patchState({
      creating: true,
      ...GenericState.load()
    });

    return this.invoiceService.createInvoice(action.req).pipe(
      map((invoice: Invoice) => this.CreateInvoiceSuccess(ctx, invoice)),
      catchError((error: any) => of(this.CreateInvoiceError(ctx, error)))
    );
  }

  CreateInvoiceSuccess(ctx: StateContext<InvoiceStateModel>, invoice: Invoice)
  {
    return ctx.patchState({
      creating: false,
      created: true,
      invoices: [ invoice, ...ctx.getState().invoices ],
      ...GenericState.success()
    });
  }

  CreateInvoiceError(ctx: StateContext<InvoiceStateModel>, error: any)
  {
    return ctx.patchState({
      creating: false,
      created: false,
      translatedError: error,
      ...GenericState.error(error)
    });
  }

  @Action(DeleteInvoice)
  DeleteInvoice(ctx: StateContext<InvoiceStateModel>, action: DeleteInvoice)
  {
    return this.invoiceService.deleteInvoice(action.invoiceId);
  }

  @Action(UpdateInvoice)
  UpdateInvoice(ctx: StateContext<InvoiceStateModel>, action: UpdateInvoice)
  {
    return this.invoiceService.updateInvoice(action.id, action.changes);
  }

  @Action(UnloadInvoice)
  UnloadInvoice(ctx: StateContext<InvoiceStateModel>, action: UnloadInvoice)
  {
    // a voir avec boulot
  }
}
