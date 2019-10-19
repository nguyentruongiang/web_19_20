import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationLayoutComponent } from './authentication-layout/authentication-layout.component';
import { AuthenticationLoginComponent } from './authentication-login/authentication-login.component';
import {LayoutComponent} from './layout/layout.component'
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome',component:AuthenticationLayoutComponent,
   children:[{
   path:'login' ,component:AuthenticationLoginComponent
 }]
},
{ path: 'dashboard',component:LayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
