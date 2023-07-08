/**
 * The component is the app entry point.
 * It displays the save button, the error message and the current tab.
 */
import { Component, ErrorHandler, inject } from '@angular/core';
import { TabControllerComponent } from './tab-controller/tab-controller.component';
import { RouterModule } from '@angular/router';
import { AppErrorHandler } from 'src/app/error-handler';
import { CommonModule } from '@angular/common';
import { TabService } from './tab/tab.service';
import { TabData } from './interfaces/tab-service';
import { StorageService } from './storage.service';
import { ErrorMessageComponent } from './error-message/error-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TabControllerComponent,
    RouterModule,
    ErrorMessageComponent,
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
  haveChanges: boolean = false;

  constructor() {
    this.storage.read()
      .then((initialData) => {
        this.tabService.setData(initialData);
      })
      .catch((error) => {
        this.errorHandler.handleError(error);
      });

    this.tabService.onChange(async (data: TabData) => {
      const storageData = await this.storage.read();
      const tabData = this.tabService.toStorageData();
      this.haveChanges = !this.storage.isEqual(storageData, tabData);
    })
  }

  async save() {
    const data = this.tabService.toStorageData();
    try {
      await this.storage.save(data);
      this.haveChanges = false;
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
}
