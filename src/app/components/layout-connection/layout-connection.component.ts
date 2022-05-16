import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {CheckUser} from "../../request/connection/action/connection.action";
import {FormControl} from "@angular/forms";
import {InputFieldComponent} from "../../utils/input-field/input-field.component";

@Component({
  selector: 'app-layout-connection',
  templateUrl: './layout-connection.component.html',
  styleUrls: ['./layout-connection.component.css']
})
export class LayoutConnectionComponent implements OnInit {

  public emailCtrl = new FormControl();
  public passwordCtrl = new FormControl();
  constructor(public router: Router, private store: Store) { }

  ngOnInit(): void {
  }

  /**
   * check on bdd user if the user exist
   */
  connectForUser() {
    localStorage.setItem('isProUserOrUser', 'user');
    this.store.dispatch(new CheckUser(this.emailCtrl.value, this.passwordCtrl.value));
  }

  connectForProUser() {
    /**
     * check on bdd proUser if the pro user exist
     */
    localStorage.setItem('isProUserOrUser', 'proUser');
  }

}
