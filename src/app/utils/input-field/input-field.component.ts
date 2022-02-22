import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() title: string = "";
  @Input() isPasswordField: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
