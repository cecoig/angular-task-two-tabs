import { Routes } from '@angular/router';
import { TabControllerComponent } from './tab-controller/tab-controller.component';

const routeConfig: Routes = [
    {
      path: 'tab/:id',
      component: TabControllerComponent,
      title: 'Two tabs task'
    },
    {
      path: '**',
      redirectTo: 'tab/1'
    },
  ];
  
  export default routeConfig;