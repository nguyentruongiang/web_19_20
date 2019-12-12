import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationLayoutComponent} from './authentication/authentication-layout/authentication-layout.component';
import {AuthenticationLoginComponent} from './authentication/authentication-login/authentication-login.component';
import {LayoutComponent} from './layout/layout.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginAuthService} from './services/login-auth.service';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/welcome'},
    {
        path: 'welcome', component: AuthenticationLayoutComponent,
        canActivate: [LoginAuthService],
        children: [{
            path: 'login', component: AuthenticationLoginComponent
        }]
    },
    {
        path: 'dashboard', component: LayoutComponent,
        canActivate: [AuthGuardService],
        children: [

            {
                path: '',
                loadChildren: './admin/admin.module#AdminModule'
            },
            {
                path: '',
                loadChildren: './student/student.module#StudentModule'
            },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
