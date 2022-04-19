import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {Ticket} from "../../utils/models/Ticket";
import {TicketState} from "../../request/ticket/state/ticket.state";
import {LoadAllTickets} from "../../request/ticket/action/ticket.action";
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

  isProUser(): boolean | null
  {
    return localStorage.getItem('isProUserOrUser') === 'proUser';
  }

  /**
   * Only display for pro user
   * Open a dialog who contains form
   */
  newTicket() {
    const dialogRef = this.dialog.open(CreateFormComponent, {
      width: '300px',
      height: '500px',
      data: {name: "Nouveau Ticket", formToLoad : 'form.json'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
