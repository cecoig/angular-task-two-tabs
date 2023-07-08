 /**
  * This component wraps the input field and add a label.
  * 
  * Usage example: 
  * @example
  * <app-input-field label="Field 1">
  *   <input [value]="field1Value" #input (keyup)="onChangeTextField(input.value)"/>
  * </app-input-field>
  */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input() label!: string;
}
