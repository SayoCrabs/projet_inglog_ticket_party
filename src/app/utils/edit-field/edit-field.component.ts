import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.css']
})
export class EditFieldComponent implements OnInit {

  // region Input

  @Input() isEditable = false;
  @Input() formInput: boolean = false;

  @Input() value: string | number | undefined;
  @Input() title: string = '';
  @Input() type: string = 'text';

  @Input() control: FormControl = new FormControl();

  @Input() classForm: MatFormFieldAppearance = 'fill';

  @Output() contentWhileEditingChange: EventEmitter<string> = new EventEmitter<string>();

  // end region Input

  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchEditMode() {
    this.isEditing = !this.isEditing;
  }

  validateValue() {
    console.log("control :" , this.control.value);
    this.contentWhileEditingChange.emit(this.control.value);
    this.switchEditMode();
  }

}
