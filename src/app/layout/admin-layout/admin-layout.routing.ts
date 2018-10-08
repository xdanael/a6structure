import { Routes} from '@angular/router';
import { RouteGuardService} from '../../route-guard.service';



import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {FormComponent} from '../../pages/form/form.component';
// import {BsComponentsComponent} from '../../pages/bs-components/bs-components.component';
import {ChartsComponent} from '../../pages/charts/charts.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {TestFormComponent} from '../../pages/test-form/test-form.component';

export const AdminLayoutRoutes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
    {path: 'dashboard', component: DashboardComponent, canActivate : [RouteGuardService]},
    {path: 'form', component: FormComponent, canActivate : [RouteGuardService]},
    {path: 'tables', component: TablesComponent, canActivate : [RouteGuardService]},
    {path: 'charts', component: ChartsComponent, canActivate : [RouteGuardService]},
    {path: 'test-form', component: TestFormComponent, canActivate : [RouteGuardService]}
    // {path: 'bs-components', component: BsComponentsComponent, canActivate : [RouteGuardService]},
];
