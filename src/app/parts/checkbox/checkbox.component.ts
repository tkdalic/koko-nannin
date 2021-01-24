import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => CheckboxComponent),
       multi: true,
     },
   ]
})
export class CheckboxComponent implements ControlValueAccessor {
  value = false;
  onChange = (value: boolean) => {};
  onTouched = (value: boolean) => {};

  constructor() {}

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: boolean) => void): void {
    this.onTouched = fn;
  }
}
