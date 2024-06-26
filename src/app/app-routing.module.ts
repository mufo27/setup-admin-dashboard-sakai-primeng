import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AdminLayoutsComponent } from './shared/layouts/admin-layouts/admin-layouts.component';
import { EmpLayoutsComponent } from './shared/layouts/emp-layouts/emp-layouts.component';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'uikit',
                loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule)
            },
            {
                path: 'utilities',
                loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule)
            },
            {
                path: 'documentation',
                loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule)
            },
            {
                path: 'blocks',
                loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule)
            },
            {
                path: 'pages',
                loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule)
            }
        ]
    },
    {
        path: 'admin',
        component: AdminLayoutsComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
            },
        ]
    },
    {
        path: 'emp',
        component: EmpLayoutsComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/emp/emp.module').then(m => m.EmpModule)
            },
        ]
    },
    {
        path: 'auth',
        loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'landing',
        loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'notfound',
        component: NotfoundComponent
    },
    {
        path: '**', redirectTo: '/notfound'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
