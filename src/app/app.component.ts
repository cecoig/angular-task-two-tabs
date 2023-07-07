import { Component, ErrorHandler, inject } from '@angular/core';
import { TabControllerComponent } from './tab-controller/tab-controller.component';
import { RouterModule } from '@angular/router';
import { AppErrorHandler } from 'src/app/error-handler';
import { CommonModule } from '@angular/common';
import { TabService } from './tab/tab.service';
import { TabData } from './interfaces/tab-service';
import { StorageService } from './storage.service';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TabControllerComponent,
    RouterModule,
    DeleteButtonComponent,
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler},
    {provide: StorageService}
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  storage: StorageService = inject(StorageService);
  tabService: TabService = inject(TabService);
  errorHandler: AppErrorHandler = inject(ErrorHandler) as AppErrorHandler;
  title = 'two-tabs';
  hasError = false;
  timeoutId: any | null = null;
  haveChanges: boolean = false;

  constructor() {
    this.errorHandler.onError(this.errorHandlerCallback);

    this.tabService.onChange(async (data: TabData) => {
      const storageData = await this.storage.read();
      const tabData = this.tabService.toStorageData();
      this.haveChanges = !this.storage.isEqual(storageData, tabData);
    })
  }

  closeErrorMessage() {
    this.hasError = false;
    clearTimeout(this.timeoutId!);
  }

  async save() {
    const data = this.tabService.toStorageData();
    try {
      await this.storage.save(data);
      this.haveChanges = false;
    } catch (error) {
      this.errorHandler.handleError(error);
      this.errorHandlerCallback(error);
    }
  }

  private errorHandlerCallback(error: any) {
    this.hasError = true; 
      
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      //hide the error message;
      this.hasError = false;
    }, 5000);
  }
}
