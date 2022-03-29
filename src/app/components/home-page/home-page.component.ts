import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {Ticket} from "../../utils/models/Ticket";
import {TicketState} from "../../request/ticket/state/ticket.state";
import {LoadAllTickets} from "../../request/ticket/action/ticket.action";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  @Select(TicketState.tickets) tickets$: Observable<Ticket[]> | undefined ;

  constructor(public store: Store) { }

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

}
