import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { Tab1Component } from '../tab1/tab1.component';
import { Tab2Component } from '../tab2/tab2.component';

@Component({
  selector: 'app-tab-controller',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    Tab1Component,
    Tab2Component,
  ],
  templateUrl: './tab-controller.component.html',
  styleUrls: ['./tab-controller.component.scss']
})
export class TabControllerComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  currentTabId!: string;

  constructor(private router: Router, ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentTabId = this.route.snapshot.params['id'];
      }
    });
  }
}
