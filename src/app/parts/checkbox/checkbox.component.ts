import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements ControlValueAccessor {
  value = false;
  onChange = (value: boolean) => {};
  onTouched = (value: boolean) => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: boolean) {
    this.value = value;
  }

  registerOnChange(fn: (value: boolean) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: boolean) => void) {
    this.onTouched = fn;
  }
}
