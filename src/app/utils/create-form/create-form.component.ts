import {Component, Input, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {FormState} from "../../request/form/state/form.state";
import {Observable} from "rxjs";
import {LoadFormFields} from "../../request/form/action/form.action";
import {Field} from "../models/field";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  @Input() formToLoad: string | null = null;
  @Select(FormState.form) form$: Observable<Field[]> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {

  if(!!this.formToLoad) this.store.dispatch(new LoadFormFields());

  }

}
