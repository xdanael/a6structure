import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    NavComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    NavComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
