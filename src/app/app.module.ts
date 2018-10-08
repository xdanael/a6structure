import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {ModalBasicComponent} from './modal-basic/modal-basic.component';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModuleModule} from './routing-module.module';
import {AuthService} from './services/auth.service';
//Charts
import {ChartsModule as Ng2Charts} from 'ng2-charts';


// NAVIGATION
//import {PageHeaderComponent} from './shared/page-header/page-header.component';
import {ComponentsModule} from './components/components.module';
//import {NavComponent} from './menu/nav/nav.component';
//import {SidebarComponent} from './menu/sidebar/sidebar.component';
//import {HeaderComponent} from './menu/header/header.component';


//LOGIN
import {LoginComponent} from './login/login.component';

//ADMIN-LAYOUT
import {AdminLayoutComponent} from './layout/admin-layout/admin-layout.component';

// PAGES
//import {SignupComponent} from './pages/signup/signup.component';
//import {FormComponent} from './pages/form/form.component';
//import {DashboardComponent} from './pages/dashboard/dashboard.component';
//import {TablesComponent} from './pages/tables/tables.component';
//import {ChartsComponent} from './pages/charts/charts.component';
//import {BsComponentsComponent} from './pages/bs-components/bs-components.component';

// BS COMPONENTS
//import {ModalComponent} from './pages/bs-components/components/modal/modal.component';
//import {AlertComponent} from './pages/bs-components/components/alert/alert.component';
//import {ButtonsComponent} from './pages/bs-components/components/buttons/buttons.component';
//import {CollapseComponent} from './pages/bs-components/components/collapse/collapse.component';
//import {DatePickerComponent} from './pages/bs-components/components/date-picker/date-picker.component';
//import {DropdownComponent} from './pages/bs-components/components/dropdown/dropdown.component';
//import {PaginationComponent} from './pages/bs-components/components/pagination/pagination.component';
//import {PopOverComponent} from './pages/bs-components/components/pop-over/pop-over.component';
//import {ProgressbarComponent} from './pages/bs-components/components/progressbar/progressbar.component';
//import {RatingComponent} from './pages/bs-components/components/rating/rating.component';
//import {TooltipComponent} from './pages/bs-components/components/tooltip/tooltip.component';
//import {TimepickerComponent} from './pages/bs-components/components/timepicker/timepicker.component';
//import {TabsComponent} from './pages/bs-components/components/tabs/tabs.component';
//import { TestFormComponent } from './pages/test-form/test-form.component';


@NgModule({
  declarations: [
      AppComponent,
      //NavComponent,
      //SidebarComponent,
      //HeaderComponent,
      //ModalBasicComponent,
      LoginComponent,
      //PageHeaderComponent,
      //SignupComponent,
      //FormComponent,
      //DashboardComponent,
      //TablesComponent,
      //ChartsComponent,
      //BsComponentsComponent,
      //ModalComponent,
      //AlertComponent,
      //CollapseComponent,
      //DatePickerComponent,
      //DropdownComponent,
      //PaginationComponent,
      //PopOverComponent,
      //ProgressbarComponent,
      //RatingComponent,
      //TooltipComponent,
      //TimepickerComponent,
      //TabsComponent,
      //ButtonsComponent,
      //TestFormComponent,
      AdminLayoutComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      Ng2Charts,
      ReactiveFormsModule,
      AngularFontAwesomeModule,
      NgbModule.forRoot(),
      HttpClientModule,
      RoutingModuleModule,
      ComponentsModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
