import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../../../utils/models/Ticket";
import {httpUrl} from "../../../utils/constant/constant";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url = httpUrl + 'tickets';

  constructor(private http: HttpClient) {
  }

  public loadTickets(): Observable<Ticket[]>
  {
    return this.http.get<Ticket[]>(this.url).pipe(
      map((ticket: Ticket[]) => ticket.map(t => Object.assign(new Ticket(t, t.category.description), t)))
    );
  }

  public deleteTicket(id: string): Observable<void>
  {
    return this.http.delete<void>(this.url + '/' + id);
  }

  public createTicket(ticket: Ticket): Observable<Ticket>
  {
    return this.http.post<Ticket>(this.url, ticket).pipe(
      map((t: Ticket) => Object.assign(new Ticket(ticket, ticket.category.description), t)));
  }

  public updateTicket(ticketId: string, ticket: Ticket): Observable<Ticket>
  {
    return this.http.put<Ticket>(this.url + '/' + ticketId, ticket).pipe(
      map((upd: Ticket) => Object.assign(new Ticket(upd), upd))
    );
  }
}
