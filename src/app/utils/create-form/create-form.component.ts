import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {FormState} from "../../request/form/state/form.state";
import {Observable} from "rxjs";
import {LoadFormFields} from "../../request/form/action/form.action";
import {Field} from "../models/field";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Ticket} from "../models/Ticket";
import {CreateTicket} from "../../request/ticket/action/ticket.action";
import {User} from "../models/user";
import {CreateUser} from "../../request/connection/action/connection.action";

export interface DialogData {
  name: string;
  formToLoad: string;
  type: number;
}

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  @Select(FormState.form) form$: Observable<Field[]> | undefined;
  @Output() submitMethod: EventEmitter<any> = new EventEmitter();

  dynamicFormGroup = new FormGroup({});

  constructor(private store: Store,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
    if (!!this.data.formToLoad) this.store.dispatch(new LoadFormFields(this.data.formToLoad));

    /**
     * Here we create all the formControl for all field
     * But we don't do that on the id field and the field with type 'Set' because we dont want display it
     */
    this.form$?.subscribe(value => {
      value.forEach(v => {
          if (v.name != 'id' && v.type != 'Set') {
            this.dynamicFormGroup.addControl(v.name, new FormControl('', Validators.required));
          }
        }
      )
    });
  }

  /**
   * here we distinct the method when submit a form
   */
  submit() {
    this.data.type == 1 ? this.createTicket() : this.createNewUser();
  }

  createTicket() {
    console.log("create ticket");

    let ticketRequest = new Ticket(this.dynamicFormGroup.getRawValue(), this.dynamicFormGroup.controls['category'].value);

    this.store.dispatch(new CreateTicket(ticketRequest));

  }

  createNewUser() {
    console.log("create user");

    let userRequest = new User(this.dynamicFormGroup.getRawValue());
    userRequest.sexe = this.dynamicFormGroup.controls['sexe'].value === 'F' ? 1 : 0;

    this.store.dispatch(new CreateUser(userRequest));
  }


}
