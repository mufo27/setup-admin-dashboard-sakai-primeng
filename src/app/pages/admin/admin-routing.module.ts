import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  imports: [RouterModule.forChild([
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: DashboardComponent }

  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
