import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserApiService {
    private url: string;

    constructor(private http: HttpClient) {
        this.url = '/api/users';
    }

    searchUser(data): Promise<any> {

        let params = new HttpParams().set('code', data.code);


        return this.http.get(this.url, {params}).toPromise().then()
            .catch();

    }

    createUser(data): Promise<any> {
        delete data.isCheck;
        delete data.isRegisterComplete;
        return this.http.post(this.url, data).toPromise().then()
            .catch();
    }

    editUser(data: any): Promise<any> {
        console.log(data, 123213);
        return this.http.put(this.url + data.id, data).toPromise().then()
            .catch();
    }

    changePasswordUser(data): Promise<any> {
        console.log('pacth');
        return this.http.patch(this.url + data.id, data).toPromise().then()
            .catch();
    }

    deleteUser(id): Promise<any> {
        return this.http.delete(this.url + id).toPromise().then()
            .catch();
    }


}
