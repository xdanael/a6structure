import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { FormComponent } from '../../pages/form/form.component';
import { ChartsComponent } from '../../pages/charts/charts.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TestFormComponent } from '../../pages/test-form/test-form.component';


import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {PageHeaderComponent} from '../../shared/page-header/page-header.component';
import {ModalBasicComponent} from '../../modal-basic/modal-basic.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    FormComponent,
    ChartsComponent,
    TablesComponent,
    TestFormComponent,
    PageHeaderComponent,
    ModalBasicComponent
]
})

export class AdminLayoutModule {}
