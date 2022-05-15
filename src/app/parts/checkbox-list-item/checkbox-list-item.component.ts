import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-list-item',
  templateUrl: './checkbox-list-item.component.html',
  styleUrls: ['./checkbox-list-item.component.scss'],
})
export class CheckboxListItemComponent {
  @Input() value = false;
  @Output() valueChange = new EventEmitter<boolean>();
  @Input() label = '';

  constructor() {}

  onChange(value: boolean): void {
    this.valueChange.emit(value);
  }
}
