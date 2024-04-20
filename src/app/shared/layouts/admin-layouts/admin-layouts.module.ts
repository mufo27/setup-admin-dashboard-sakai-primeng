import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AdminLayoutsComponent } from './admin-layouts.component';
import { AdminTopbarComponent } from './admin-topbar/admin-topbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';



@NgModule({
  declarations: [
    AdminLayoutsComponent,
    AdminTopbarComponent,
    AdminSidebarComponent,
    AdminMenuComponent,
    AdminFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AdminLayoutsModule { }
