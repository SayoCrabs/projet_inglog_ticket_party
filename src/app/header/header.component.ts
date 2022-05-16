import { Component, OnInit } from '@angular/core';
import {CreateFormComponent} from "../utils/create-form/create-form.component";
import {MatDialog} from "@angular/material/dialog";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {ConnectionState} from "../request/connection/state/connection.state";
import {User} from "../utils/models/user";
import {UserAccountComponent} from "../components/user-account/user-account.component";
import {UnloadInvoice} from "../request/invoice/action/invoice.action";
import {ResetUser} from "../request/connection/action/connection.action";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Select(ConnectionState.user) user$: Observable<User> | undefined | null;
  constructor(public dialog: MatDialog, private store: Store) { }

  ngOnInit(): void {
  }

  signIn() {
    const dialogRef = this.dialog.open(CreateFormComponent, {
      width: '300px',
      height: '100%',
      data: {name: "Inscrivez-vous !", formToLoad : 'User', type: 2},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  userAccount() {
    const dialogRef = this.dialog.open(UserAccountComponent, {
      width: '500px',
      height: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /**
   * Disconnect the current user
   */
  disconnect() {
    this.store.dispatch(new ResetUser());
    this.store.dispatch(new UnloadInvoice());
  }
}
