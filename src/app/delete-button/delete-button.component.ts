 /**
  * This component displays a button with content "x".
  * The button has onChange handler property which is callback handling the click event.
  * 
  * Usage example: 
 * @example
 * <delete-button (click)="clickHandler($event)"></delete-button>
  */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'delete-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {
  @Output() click = new EventEmitter();
  @Input() disabled: boolean = false;
  @Output() className!: string;

  onClick() {
    this.click.emit();
  }
}
