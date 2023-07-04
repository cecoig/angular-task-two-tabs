import { Component } from '@angular/core';
import { TabControllerComponent } from './tab-controller/tab-controller.component';
import { TabComponent } from './tab/tab.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TabControllerComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'two-tabs';

  save() {
    console.log('The data is saved!')
  }
}
