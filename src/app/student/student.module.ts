import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentScheduleComponent} from './student-schedule/student-schedule.component';
import {NgZorroAntdModule, NzPaginationModule, NzTableModule} from 'ng-zorro-antd';
import {RegisterApiService} from '../services/api/register-api.service';
import {PdfService} from '../services/pdf.service';
import {PrintRegistrationComponent} from './print-registration/print-registration.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
export const routes: Routes = [
    {
        path: '',

        children: [
            {
                path: 'dang-ky',
                component: StudentScheduleComponent

            },
            {
                path: 'in-dang-ky',
                component: PrintRegistrationComponent

            }
        ]
    }
];

@NgModule({
    declarations: [
        StudentScheduleComponent,
        PrintRegistrationComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
       FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        NzTabsModule,
        NzIconModule,
        NzDatePickerModule,
        NzIconModule,
        NzFormModule,
        NzTableModule,
        NzPaginationModule
    ],
    providers: [RegisterApiService, PdfService]
})

export class StudentModule {
}
