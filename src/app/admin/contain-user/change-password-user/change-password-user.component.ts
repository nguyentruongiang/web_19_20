import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../interface/user';

@Component({
    selector: 'app-change-password-user',
    templateUrl: './change-password-user.component.html',
    styleUrls: ['./change-password-user.component.css']
})
export class ChangePasswordUserComponent implements OnInit {
    @Input() userInfromation: User;

    constructor() {

        this.userInfromation = {
            username: '',
            password: '',
            full_name: '',
            code: ''
        };
    }

    onChange() {
        if (this.userInfromation.password == undefined) {

        }
  console.log(this.userInfromation.password)
    }

    ngOnInit() {

    }

}
