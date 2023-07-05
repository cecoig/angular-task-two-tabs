import { Component, ErrorHandler } from '@angular/core';
import { TabControllerComponent } from './tab-controller/tab-controller.component';
import { RouterModule } from '@angular/router';
import { AppErrorHandler } from 'src/error-handler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TabControllerComponent,
    RouterModule
  ],
  providers: [{provide: ErrorHandler, useClass: AppErrorHandler}],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'two-tabs';
  hasError = false;
  timeoutId: any | null = null;

  constructor(private errorHandler: ErrorHandler) {
    (errorHandler as AppErrorHandler).onError((error) => {
      this.hasError = true; 
      
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.timeoutId = setTimeout(() => {
        //hide the error message;
        this.hasError = false;
      }, 5000);
    })
  }

  closeErrorMessage() {
    this.hasError = false;
    clearTimeout(this.timeoutId!);
  }

  save() {
    console.log('The data is saved!')
  }
}
