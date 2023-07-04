import { Component, inject } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-tab-controller',
  standalone: true,
  imports: [
    CommonModule,
    TabComponent,
    RouterModule,
    InputFieldComponent,
  ],
  templateUrl: './tab-controller.component.html',
  styleUrls: ['./tab-controller.component.css']
})
export class TabControllerComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  currentTabId!: string;

  constructor(private router: Router, ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.currentTabId = this.route.snapshot.params['id'];
      }
    });
  }
}
