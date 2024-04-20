import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([
    {
      path: 'dashboard',
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'profile', component: ProfileComponent },
      ]
    }
  ])],
})
export class EmpRoutingModule { }
