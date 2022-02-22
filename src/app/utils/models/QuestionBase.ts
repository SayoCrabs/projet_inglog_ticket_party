export class QuestionBase<T> {
  value: T | undefined;
  key: string | undefined;
  label: string | undefined;
  required: boolean = false;
  order: number | undefined;
  controlType: string | undefined;
  placeholder: string | undefined;
  iterable: boolean | undefined;

}
