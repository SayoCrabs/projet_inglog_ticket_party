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

  deleteTicket(ticket: number) {
    this.store.dispatch(new DeleteTicket(ticket));
  }

  updateNumberTicket(ticket: Ticket, nb: string )
  {
    this.store.dispatch(new UpdateTicket(ticket.id, ticket));
  }

  updatePriceTicket(ticket: Ticket,nb: string)
  {
    /**
     * a voir avec le code du boulot
     */
    let newT = ticket;
    newT.price = Number(nb);
    this.store.dispatch(new UpdateTicket(ticket.id, newT));
  }

  updatePosition(ticket: Ticket,position: string) {
    this.store.dispatch(new UpdateTicket(ticket.id, ticket));
  }
}
