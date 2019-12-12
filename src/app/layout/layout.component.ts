import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserInformationService} from '../services/user-information.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    isVisible;

    constructor(private  router: Router, private  userInformationService: UserInformationService) {
    }

    ngOnInit() {
    }

    changePassword() {
        this.isVisible = true;
    }

    handleCancel() {
        this.isVisible = false;
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/welcome/login']);

    }

    isAdmin() {

        return this.userInformationService.isAdmin();
    }

    isUser() {

        return this.userInformationService.isUser();
    }
    getFullName() {
         console.log(this.userInformationService.getFullName())
        return this.userInformationService.getFullName();
    }
    getUserName() {

        return this.userInformationService.getUserName();
    }
}
