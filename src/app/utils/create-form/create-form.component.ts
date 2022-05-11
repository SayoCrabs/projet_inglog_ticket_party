import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {FormState} from "../../request/form/state/form.state";
import {Observable} from "rxjs";
import {LoadFormFields} from "../../request/form/action/form.action";
import {Field} from "../models/field";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  dynamicFormGroup = new FormGroup({}) ;

  formFields: Field[] = [];

  constructor(private store: Store,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void
  {
    if(!!this.data.formToLoad) this.store.dispatch(new LoadFormFields(this.data.formToLoad));

    this.form$?.subscribe(value => {
      value.forEach(v => this.dynamicFormGroup.addControl(v.name, new FormControl('', Validators.required)))
    });
    console.log(this.dynamicFormGroup)
  }

  /**
   * here we distinct the method when submit a form
   */
  submit()
  {
    this.data.type == 1 ? this.createTicket(): this.createNewUser();
  }

  createTicket()
  {
    console.log("create ticket");
    // call the action for create ticket
  }

  createNewUser()
  {
    console.log("create user");
    // call the action for create user
  }


}
