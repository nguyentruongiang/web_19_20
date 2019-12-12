import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentScheduleComponent} from './student-schedule/student-schedule.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RegisterApiService} from '../services/api/register-api.service';
import {PdfService} from '../services/pdf.service';

export const routes: Routes = [
    {
        path: '',

        children: [
            {
                path: 'dang-ky',
                component: StudentScheduleComponent

            }
        ]
    }
];

@NgModule({
    declarations: [
        StudentScheduleComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
         NgZorroAntdModule,
    ],
    providers:[RegisterApiService,PdfService]
})

export class StudentModule {
}
