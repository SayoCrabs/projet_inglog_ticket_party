import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout-connection',
  templateUrl: './layout-connection.component.html',
  styleUrls: ['./layout-connection.component.css']
})
export class LayoutConnectionComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  connectForUser() {
    /**
     * check on bdd user if the user exist
     */
    localStorage.setItem('isProUserOrUser', 'user');
  }

  connectForProUser() {
    /**
     * check on bdd proUser if the pro user exist
     */
    localStorage.setItem('isProUserOrUser', 'proUser');
  }

}
