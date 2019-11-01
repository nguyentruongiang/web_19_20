import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AuthenticationLayoutComponent } from './authentication-layout/authentication-layout.component';
import { AuthenticationLoginComponent } from './authentication-login/authentication-login.component';
import {LayoutComponent} from './layout/layout.component'
registerLocaleData(en);
import {ExamRegistrationComponent}  from './exam-registration/exam-registration.component'
import {AccountRegistrationComponent}  from './account-registration/account-registration.component'
import { BanedStudentComponent } from './baned-student/baned-student.component';
import { AllowedStudentComponent } from './allowed-student/allowed-student.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ModalCreateScheduleComponent } from './modal-create-schedule/modal-create-schedule.component';
import { ManagerSubjectComponent } from './manager-subject/manager-subject.component';
import { CreateUpdateSubjectComponent } from './create-update-subject/create-update-subject.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationLayoutComponent,
    AuthenticationLoginComponent,
    LayoutComponent,
    ExamRegistrationComponent,
    AccountRegistrationComponent,
    BanedStudentComponent,
    AllowedStudentComponent,
    CreateScheduleComponent,
    ModalCreateScheduleComponent,
    ManagerSubjectComponent,
    CreateUpdateSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    ReactiveFormsModule,
    NzFormModule,
    NzModalModule,
    NzDatePickerModule 
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
