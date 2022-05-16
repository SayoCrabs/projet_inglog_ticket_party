import { Component, OnInit } from '@angular/core';
import {Select} from "@ngxs/store";
import {ConnectionState} from "../../request/connection/state/connection.state";
import {Observable} from "rxjs";
import {User} from "../../utils/models/user";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  @Select(ConnectionState.user) user$: Observable<User> | undefined | null;
  constructor() { }

  ngOnInit(): void {
  }

}
