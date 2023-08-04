import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';


export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
   { path: 'notifications',  component: NotificationsComponent },
];
  
