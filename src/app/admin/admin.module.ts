import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainUserComponent} from './contain-user/contain-user.component';
import {RouterModule, Routes} from '@angular/router';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {ListUserComponent} from './contain-user/list-user/list-user.component';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NgZorroAntdModule, NzTableModule} from 'ng-zorro-antd';
import {UserApiService} from '../services/api/user-api.service';
import {CreatUsersComponent} from './contain-user/creat-users/creat-users.component';
import {ExcelProssingService} from '../excel-prossing.service';
import {InformationUserComponent} from './contain-user/information-user/information-user.component';
import {ChangePasswordUserComponent} from './contain-user/change-password-user/change-password-user.component';
import {ContainerUserSubjectComponent} from './container-user-subject/container-user-subject.component';
import {CreateUserSubjectComponent} from './container-user-subject/create-user-subject/create-user-subject.component';
import {ListUserSubjectComponent} from './container-user-subject/list-user-subject/list-user-subject.component';
import {UserSubjectApiService} from '../services/api/user-subject-api.service';
import {ListSubjectComponent} from './containner-subject/list-subject/list-subject.component';
import {SubjectApiService} from '../services/api/subject-api.service';
import {SubjectInformationComponent} from './containner-subject/subject-information/subject-information.component';
import {ListExamComponent} from './cointaner-exam/list-exam/list-exam.component';
import {ExamApiService} from '../services/api/exam-api.service';
import {ExamInformationComponent} from './cointaner-exam/exam-information/exam-information.component';
import {ListScheduleComponent} from './contaner-schedule/list-schedule/list-schedule.component';
import {ScheduleInformationComponent} from './contaner-schedule/schedule-information/schedule-information.component';
import {ScheduleApiService} from '../services/api/schedule-api.service';
import {RoomApiService} from '../services/api/room-api.service';
import {PdfService} from '../services/pdf.service';


export const routes: Routes = [
    {
        path: '',

        children: [
            {
                path: 'cap-tai-khoan',
                component: ContainUserComponent,

            }, {
                path: 'danh-sach-cam-thi',
                component: ContainerUserSubjectComponent
            },
            {
                path: 'mon-hoc',
                component: ListSubjectComponent
            },
            {
                path: 'ki-thi',
                component: ListExamComponent
            },
            {
                path: 'lich-thi',
                component: ListScheduleComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        ContainUserComponent,
        ListUserComponent,
        CreatUsersComponent,
        InformationUserComponent,
        ChangePasswordUserComponent,
        ContainerUserSubjectComponent,
        ListUserSubjectComponent,
        CreateUserSubjectComponent,
        ListSubjectComponent,
        SubjectInformationComponent,
        ListExamComponent,
        ExamInformationComponent,
        ListScheduleComponent,
        ScheduleInformationComponent,

    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        NzTabsModule,
        NzIconModule,
        NzDatePickerModule,
        NzIconModule,
        NzFormModule,
        NzTableModule,
    ],
    providers: [UserApiService, ExcelProssingService, UserSubjectApiService, SubjectApiService, ExamApiService, ScheduleApiService, RoomApiService, PdfService]
})
export class AdminModule {
}
