import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationLayoutComponent } from './authentication-layout/authentication-layout.component';
import { AuthenticationLoginComponent } from './authentication-login/authentication-login.component';
import {LayoutComponent} from './layout/layout.component'
import {ExamRegistrationComponent}  from './exam-registration/exam-registration.component'
import {AccountRegistrationComponent}  from './account-registration/account-registration.component'
import { BanedStudentComponent } from './baned-student/baned-student.component';
import { AllowedStudentComponent } from './allowed-student/allowed-student.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ManagerSubjectComponent } from './manager-subject/manager-subject.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome',component:AuthenticationLayoutComponent,
   children:[{
   path:'login' ,component:AuthenticationLoginComponent
 }]
},
{ path: 'dashboard',component:LayoutComponent,
children:[{
   path:'dang-ky' ,component:ExamRegistrationComponent,
 
 },
{
  path:'cap-tai-khoan' ,component:AccountRegistrationComponent
},
{
  path:'danh-sach-cam-thi' ,component:BanedStudentComponent
},
{
  path:'danh-sach-duoc-thi' ,component:AllowedStudentComponent
},
{
  path:'tao-lich-thi' ,component:CreateScheduleComponent
},
{
  path:'mon-hoc' ,component:ManagerSubjectComponent
}

]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
