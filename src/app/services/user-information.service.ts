import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserInformationService {
    user: any;

    constructor() {

    }

    isAdmin() {
        this.user = localStorage.getItem('user');
        return JSON.parse(this.user).role == 2;
    }

    isUser() {
        this.user = localStorage.getItem('user');
        return JSON.parse(this.user).role == 2;
    }

    getToken() {
        this.user = localStorage.getItem('user');
        return JSON.parse(this.user).token;
    }

    getFullName() {
        this.user = localStorage.getItem('user');
        return JSON.parse(this.user).full_name;
    }

    getUserName() {
        this.user = localStorage.getItem('user');
        return JSON.parse(this.user).username;
    }

}
