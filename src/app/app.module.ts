import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IconsProviderModule} from './icons-provider.module';
import {NzFormModule} from 'ng-zorro-antd/form';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {AuthenticationLayoutComponent} from './authentication/authentication-layout/authentication-layout.component';
import {AuthenticationLoginComponent} from './authentication/authentication-login/authentication-login.component';
import {LayoutComponent} from './layout/layout.component';
import {ExamRegistrationComponent} from './exam-registration/exam-registration.component';

import {PrintRegistrationComponent} from './print-registration/print-registration.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ExcelProssingService} from './excel-prossing.service';
import {ManagerStudentService} from './manager-student.service';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginAuthService} from './services/login-auth.service';
import {PrintContestReportService} from './services/print-contest-report.service';
import {UserInformationService} from './services/user-information.service';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {AdminModule} from './admin/admin.module';
import {StudentModule} from './student/student.module';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationLayoutComponent,
        AuthenticationLoginComponent,
        LayoutComponent,
        ExamRegistrationComponent,


        PrintRegistrationComponent,
        ChangePasswordComponent,


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
        NzDatePickerModule,
        NzTabsModule,
        AdminModule,
        StudentModule
    ],
    providers: [{
        provide: NZ_I18N,
        useValue: en_US
    }, ExcelProssingService, ManagerStudentService, AuthService, AuthGuardService, LoginAuthService, PrintContestReportService, UserInformationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
