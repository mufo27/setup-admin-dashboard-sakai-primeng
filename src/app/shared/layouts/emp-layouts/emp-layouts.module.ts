import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { EmpLayoutsRoutingModule } from './emp-layouts-routing.module';

import { EmpLayoutsComponent } from './emp-layouts.component';
import { EmpTopbarComponent } from './emp-topbar/emp-topbar.component';
import { EmpSidebarComponent } from './emp-sidebar/emp-sidebar.component';
import { EmpMenuComponent } from './emp-menu/emp-menu.component';
import { EmpFooterComponent } from './emp-footer/emp-footer.component';



@NgModule({
  declarations: [
    EmpLayoutsComponent,
    EmpTopbarComponent,
    EmpSidebarComponent,
    EmpMenuComponent,
    EmpFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmpLayoutsRoutingModule
  ]
})
export class EmpLayoutsModule { }
