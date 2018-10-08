import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { RouteGuardService} from './route-guard.service';


import {LoginComponent} from './login/login.component';
import {FormComponent} from './pages/form/form.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ChartsComponent} from './pages/charts/charts.component';
import {TablesComponent} from './pages/tables/tables.component';
import {TestFormComponent} from './pages/test-form/test-form.component';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';


/*

const  routes: Routes = [
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: '', component: DashboardComponent, canActivate : [RouteGuardService]},
    {path: 'dashboard', component: DashboardComponent, canActivate : [RouteGuardService]},
    {path: 'form', component: FormComponent, canActivate : [RouteGuardService]},
    {path: 'tables', component: TablesComponent, canActivate : [RouteGuardService]},
    {path: 'charts', component: ChartsComponent, canActivate : [RouteGuardService]},
    {path: 'bs-components', component: BsComponentsComponent, canActivate : [RouteGuardService]},
    {path: 'test-form', component: TestFormComponent, canActivate : [RouteGuardService]}
];
*/


/**/
const  routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
    /*{ path: '', loadChildren: './layout/admin-layout/admin-layout.module#AdminLayoutModule'}*/
  {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
              path: '',
              loadChildren: './layout/admin-layout/admin-layout.module#AdminLayoutModule'
          }]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
    exports : [
        RouterModule
    ],
    providers : [RouteGuardService],
  declarations: []
})
export class RoutingModuleModule { }
