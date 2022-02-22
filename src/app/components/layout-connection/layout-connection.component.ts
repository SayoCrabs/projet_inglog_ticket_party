import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-connection',
  templateUrl: './layout-connection.component.html',
  styleUrls: ['./layout-connection.component.css']
})
export class LayoutConnectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  connectForUser() {
    /**
     * check on bdd user if the user exist
     */
  }

  connectForProUser() {
    /**
     * check on bdd proUser if the pro user exist
     */
  }

}
