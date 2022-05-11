import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {GenericState} from "../../../utils/models/GenericState";
import {LoadFormFields} from "../action/form.action";
import {FormService} from "../service/form.service";
import {Field} from "../../../utils/models/field";
import {tap} from "rxjs/operators";

export interface FormStateModel {
  form: Field[];
  creating: boolean;
  created: boolean;
  translatedError: string | null;
}

export const FormInitialState = {
  form: [],
  translatedError: null,
  ...GenericState.init()
};

@State({
  name: 'form',
  defaults: FormInitialState
})

@Injectable()
export class FormState extends GenericState {

  constructor(private formService: FormService) {
    super();
  }

  @Selector()
  static form(state: FormStateModel): Field[] {
    return state.form;
  }

  @Action(LoadFormFields)
  LoadFormFields(ctx: StateContext<FormStateModel>, action: LoadFormFields)
  {
    return this.formService.loadForm(action.formToLoad).pipe(
      tap((result) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          form: result,
        });
      }));
  }
}
