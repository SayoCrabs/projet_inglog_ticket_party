import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {httpUrl} from "../../../utils/constant/constant";
import {Invoice} from "../../../utils/models/Invoice";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  url = httpUrl + 'tickets';

  constructor(private http: HttpClient) {
  }

  public loadInvoices(): Observable<Invoice[]>
  {
    return this.http.get<Invoice[]>(this.url);
  }

  public deleteInvoice(id: number)
  {
    return this.http.delete(this.url + '/' + id);
  }

  public createInvoice(invoice: Invoice): Observable<Invoice>
  {
    return this.http.post<Invoice>(this.url, invoice);
  }

  public updateInvoice(invoiceId: number, invoice: Invoice): Observable<Invoice>
  {
    return this.http.put<Invoice>(this.url + '/' + invoiceId, invoice);
  }
}
