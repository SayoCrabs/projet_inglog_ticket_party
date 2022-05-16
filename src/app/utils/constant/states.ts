import { TicketState } from "../../request/ticket/state/ticket.state";
import { FormState } from "../../request/form/state/form.state";
import { ConnectionState } from "../../request/connection/state/connection.state";
import {InvoiceState} from "../../request/invoice/state/invoice.state";

export const ngxsStates = [ FormState, TicketState, ConnectionState, InvoiceState]
