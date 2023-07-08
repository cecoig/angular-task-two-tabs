 /**
  * This component displays a error message with red background. 
  * The message is visible for period of time (milliseconds) set by the property interval.
  * if property interval is missed the default value is 5000 milliseconds.
  * 
  * The component has the close button as well and the user can close the message explicitly.
  * 
  * Usage example: 
 * @example
 * <app-error-message interval="2000">Your message</app-error-message>
  */
import { Component, ErrorHandler, Input, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { AppErrorHandler } from '../error-handler';

const defaultInterval = 5000; //milliseconds

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule, DeleteButtonComponent],
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  errorHandler: AppErrorHandler = inject(ErrorHandler) as AppErrorHandler;
  timeoutId: any | null = null;
  hasError: boolean = false;
  // timeout interval in milliseconds
  @Input() interval: number = defaultInterval;

        
  constructor() {
    this.errorHandler.onError((error: any) => {
      this.hasError = true; 
  
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
  
      this.timeoutId = setTimeout(() => {
        //hide the error message;
        this.hasError = false;
      }, this.interval);
    });
  }

  closeErrorMessage() {
    this.hasError = false;
  }
}
