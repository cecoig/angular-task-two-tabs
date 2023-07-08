/**
 * The component display text field and a list with all added strings.
 */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTabComponent } from '../tab/tab.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    DeleteButtonComponent,
  ],
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component extends BaseTabComponent{
  @Input() field3Value!: string;
  values: string[] = [];

  constructor() {
    super();
    const data = this.service.readData();
    this.field3Value = data.tab2InputValue;
    this.values = data.tab2ListItems;
  }

  onChangeTextField(value: string): void {
    this.field3Value = value;
    this.onChange({
      tab2InputValue: this.field3Value,
    });
  }

  onSubmit() {
    if (this.field3Value) {
      this.values.push(this.field3Value);
      this.field3Value = '';
      this.onChange({
        tab2InputValue: this.field3Value, 
        tab2ListItems: [...this.values]
      });
    }
  }

  delete(index: number) {
    this.values.splice(index, 1);
    this.onChange({
      tab2ListItems: [...this.values]
    });
  }
}
