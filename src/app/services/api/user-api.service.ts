import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserApiService {
    private url: string;
    header: HttpHeaders;

    constructor(private http: HttpClient) {
        this.url = '/api/users/';
        this.header = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('user')).token);
    }

    searchUser(data): Promise<any> {

        let params = new HttpParams().set('code', data.code).set('page', data.page);


        return this.http.get(this.url, {params, headers: this.header}).toPromise().then()
            .catch();

    }

    createUser(data): Promise<any> {
        delete data.isCheck;
        delete data.isRegisterComplete;
        return this.http.post(this.url, data, {headers: this.header}).toPromise().then()
            .catch();
    }

    editUser(data: any): Promise<any> {
        console.log(data, 123213);
        return this.http.put(this.url + data.id, data, {headers: this.header}).toPromise().then()
            .catch();
    }

    changePasswordUser(data): Promise<any> {
        console.log('pacth');
        return this.http.patch(this.url + data.id, data, {headers: this.header}).toPromise().then()
            .catch();
    }

    deleteUser(id): Promise<any> {
        return this.http.delete(this.url + id, {headers: this.header}).toPromise().then()
            .catch();
    }


}
