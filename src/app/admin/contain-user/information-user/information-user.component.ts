import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../interface/user';

@Component({
    selector: 'app-information-user',
    templateUrl: './information-user.component.html',
    styleUrls: ['./information-user.component.css']
})
export class InformationUserComponent implements OnInit {
    @Input() userInfromation: User = {
        username: '',
        password: '',
        full_name: '',
        code: ''
    };


    constructor() {
        this.userInfromation = {
            username: '',
            password: '',
            full_name: '',
            code: ''
        };
    }

    ngOnInit() {

    }


}
