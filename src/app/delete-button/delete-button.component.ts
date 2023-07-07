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
