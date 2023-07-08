/**
 * The component displays a text field and dropdown.
 */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTabComponent } from '../tab/tab.component';
import { InputFieldComponent } from '../input-field/input-field.component';

const defaultDropdownValue = 'value1';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
  ],
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component extends BaseTabComponent{
  @Input() field1Value!: string | string[];
  @Input() field2Value!: string | string[];

  constructor() {
    super();
    const data = this.service.readData();
    this.field1Value = data.tab1InputValue;
    this.field2Value = data.tab1dropdownValue === '' 
      ? defaultDropdownValue 
      : data.tab1dropdownValue;
  }

  onChangeTextField(value: string): void {
    this.field1Value = value;
    this.onChange({tab1InputValue: this.field1Value})
  }

  onChangeDropdownField(value: string): void {
    this.field2Value = value;
    this.onChange({
      tab1dropdownValue: this.field2Value
    });
  }
}
