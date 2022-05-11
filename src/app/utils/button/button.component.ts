import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() clickMethod: EventEmitter<any> = new EventEmitter();
  @Input() textButton: string = 'Envoyer';
  @Input() colorBtn: string = 'purple';
  @Input() disabledButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
