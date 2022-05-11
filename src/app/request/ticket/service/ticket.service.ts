import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../../../utils/models/Ticket";
import {httpUrl} from "../../../utils/constant";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url = httpUrl;
  constructor(private http: HttpClient) {
  }

  public loadTickets(): Observable<Ticket[]>
  {
    return this.http.get<Ticket[]>(this.url);
  }

  public deleteTicket(id: number)
  {
    return this.http.delete(this.url + id);
  }

  public createTicket(ticket: Ticket): Observable<Ticket>
  {
    return this.http.post<Ticket>(this.url, ticket);
  }

  public updateTicket(ticketId: number, ticket: Partial<Ticket>): Observable<Ticket>
  {
    return this.http.put<Ticket>(this.url + ticketId, ticket);
  }
}
