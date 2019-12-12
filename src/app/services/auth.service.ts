import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: any;

    constructor() {


    }

    isLogin() {
        this.user = localStorage.getItem('user');
        if (this.user != undefined) {
            return true;
        } else {
            return false;
        }
    }

    isAdmin() {

    }

    isStuddent() {

    }

    logout() {

        localStorage.clear();
    }

}
