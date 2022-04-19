import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {FormState} from "../../request/form/state/form.state";
import {Observable} from "rxjs";
import {LoadFormFields} from "../../request/form/action/form.action";
import {Field} from "../models/field";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  name: string;
  formToLoad: string;
  ev: EventEmitter<any>;
}

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  @Select(FormState.form) form$: Observable<Field[]> | undefined;
  @Output() submitMethod: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  if(!!this.data.formToLoad) this.store.dispatch(new LoadFormFields(this.data.formToLoad));

  }
}
