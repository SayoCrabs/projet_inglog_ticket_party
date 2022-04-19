import { Component, OnInit } from '@angular/core';
import {CreateFormComponent} from "../utils/create-form/create-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  signIn() {
    const dialogRef = this.dialog.open(CreateFormComponent, {
      width: '300px',
      height: '500px',
      data: {name: "Inscrivez-vous !", formToLoad : 'signIn.json', ev: this.submitMethod()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  submitMethod(){}
}
