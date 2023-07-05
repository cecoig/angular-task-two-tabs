import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../tab/tab.component';
import { InputFieldComponent } from '../input-field/input-field.component';

const inputKeyName = 'tab2-input';
const listKeyName = 'tab2-list';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
  ],
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component extends TabComponent{
  @Input() field3Value!: string;
  values: string[] = [];

  constructor() {
    super();
    const data = this.service.readData();
    this.field3Value = data[inputKeyName] || '';
    this.values = data[listKeyName] || [];
  }

  onChangeTextField(value: string): void {
    this.field3Value = value;
    this.onChange({[inputKeyName]: this.field3Value});
  }

  onSubmit() {
    if (this.field3Value) {
      this.values.push(this.field3Value);
      this.field3Value = '';
      this.onChange({[inputKeyName]: this.field3Value, [listKeyName]: [...this.values]});
    }
  }

  delete(index: number) {
    this.values.splice(index, 1);
  }
}
