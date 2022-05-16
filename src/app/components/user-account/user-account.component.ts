import {Component, Input, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ConnectionState} from "../../request/connection/state/connection.state";
import {Observable} from "rxjs";
import {User} from "../../utils/models/user";
import {DeleteUser, UpdateUser} from "../../request/connection/action/connection.action";
import {Ticket} from "../../utils/models/Ticket";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  @Select(ConnectionState.user) user$: Observable<User> | undefined | null;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  getDate(date: Date): string {
    const d = new Date(date);
    return d.toDateString();
  }

  // region Update

  updateName(user: User, value: string)
  {
    const userReq = new User(user);
    userReq.name = value;
    this.updateUser(userReq);
  }

  updateFirstName(user: User, value: string)
  {
    const userReq = new User(user);
    userReq.firstname = value;
    this.updateUser(userReq);
  }

  updateEmail(user: User, value: string)
  {
    const userReq = new User(user);
    userReq.email = value;
    this.updateUser(userReq);
  }

  updatePassword(user: User, value: string)
  {
    const userReq = new User(user);
    userReq.password = value;
    this.updateUser(userReq);
  }

  updateAddress(user: User, value: string)
  {
    const userReq = new User(user);
    userReq.address = value;
    this.updateUser(userReq);
  }

  updateAge(user: User, value: string)
  {
    const userReq = new User(user);
    userReq.age = Number(value);
    this.updateUser(userReq);
  }

  updateBirthDate(user: User, value: string) {
    const userReq = new User(user);
    userReq.dateOfbirth = new Date(value);
    this.updateUser(userReq);
  }

  updateUser(userReq: User)
  {
    this.store.dispatch(new UpdateUser(userReq.id, userReq));
  }

  // end region

  removeAccount(user: User) {
    this.store.dispatch(new DeleteUser(user.id))
  }
}
