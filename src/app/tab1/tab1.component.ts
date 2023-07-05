import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../tab/tab.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { TabService } from '../tab/tab.service';

const inputKeyName = 'tab1-input';
const dropdownKeyName = 'tab1-select';
const defaultDropdownValue = 'value1';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
  ],
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component extends TabComponent{
  @Input() field1Value!: string | string[];
  @Input() field2Value!: string | string[];

  constructor() {
    super();
    const data = this.service.readData();
    this.field1Value = data[inputKeyName] || '';
    this.field2Value = data[dropdownKeyName] || defaultDropdownValue;
  }

  onChangeTextField(value: string): void {
    this.field1Value = value;
    this.onChange({[inputKeyName]: this.field1Value})
  }

  onChangeDropdownField(value: string): void {
    this.field2Value = value;
    this.onChange({[dropdownKeyName]: this.field2Value})
  }
}
