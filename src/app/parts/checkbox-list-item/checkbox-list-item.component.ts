import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-list-item',
  templateUrl: './checkbox-list-item.component.html',
  styleUrls: ['./checkbox-list-item.component.scss'],
})
export class CheckboxListItemComponent implements OnInit {
  @Input() value = false;
  @Input() label: string = '';

  constructor() {}

  ngOnInit(): void {}
}
