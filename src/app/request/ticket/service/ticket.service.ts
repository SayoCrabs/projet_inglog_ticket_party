import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../../../utils/models/Ticket";

@Injectable({ providedIn: 'root' })
export class TicketService {

  url = 'assets/';

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

  public createTicket(ticket: Ticket)
  {
    return this.http.post(this.url, ticket);
  }

  public updateTicket(ticketId: number)
  {
    // /warning : need to verify if is right
    return this.http.put(this.url, ticketId);
  }
}
