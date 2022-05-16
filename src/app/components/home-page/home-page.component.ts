import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {Ticket} from "../../utils/models/Ticket";
import {TicketState} from "../../request/ticket/state/ticket.state";
import {DeleteTicket, LoadAllTickets, UpdateTicket} from "../../request/ticket/action/ticket.action";
import {MatDialog} from "@angular/material/dialog";
import {CreateFormComponent} from "../../utils/create-form/create-form.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Select(TicketState.tickets) tickets$: Observable<Ticket[]> | undefined ;

  constructor(public store: Store, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadAllTickets());


    if(localStorage.getItem('isProUserOrUser') === null)
    {
      localStorage.setItem('isProUserOrUser', 'visitor');
    }
  }

  ngOnDestroy()
  {

  }

  isProUser(): boolean
  {
    return localStorage.getItem('isProUserOrUser') === 'proUser';
  }

  test(ticket:Ticket): string{
    return ticket.title;
  }

  /**
   * Only display for pro user
   * Open a dialog who contains form
   */
  newTicket() {
    const dialogRef = this.dialog.open(CreateFormComponent, {
      width: '500px',
      height: '100%',
      data: {name: "Nouveau Ticket", formToLoad : 'Ticket', type: 1},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteTicket(ticketId: string, ticket: Ticket) {
    this.store.dispatch(new DeleteTicket(ticketId, ticket));
  }

  // region update

  updateTitle(ticket: Ticket, value: string) {
    const ticketReq = new Ticket(ticket, ticket.category.description);
    ticketReq.title = value;
    this.updateTicket(ticketReq);
  }

  updateStartDate(ticket: Ticket, value: string) {
    const ticketReq = new Ticket(ticket, ticket.category.description);
    ticketReq.startDate = new Date(value);
    this.updateTicket(ticketReq);
  }

  updateEndDate(ticket: Ticket, value: string) {
    const ticketReq = new Ticket(ticket, ticket.category.description);
    ticketReq.endDate = new Date(value);
    this.updateTicket(ticketReq);
  }

  updateNumberTicket(ticket: Ticket, nb: string )
  {
    const ticketReq = new Ticket(ticket, ticket.category.description);
    ticketReq.quantite = Number(nb);
    this.updateTicket(ticketReq);
  }

  updatePriceTicket(ticket: Ticket,nb: string)
  {
    const ticketReq = new Ticket(ticket, ticket.category.description);
    ticketReq.price = Number(nb);
    this.updateTicket(ticketReq);
  }

  updatePosition(ticket: Ticket,position: string) {
    const ticketReq = new Ticket(ticket, ticket.category.description);
    ticketReq.position = position;
    this.updateTicket(ticketReq);
  }

  updateLimitAge(ticket: Ticket, value: string) {
    const ticketReq = new Ticket(ticket, ticket.category.description);
    ticketReq.limitAge = Number(value);
    this.updateTicket(ticketReq);
  }

  updateTicket(ticketReq: Ticket)
  {
    this.store.dispatch(new UpdateTicket(ticketReq.id, ticketReq));
  }

  getDate(date: Date): string {
    const d = new Date(date);
    return d.toDateString();
  }
}
