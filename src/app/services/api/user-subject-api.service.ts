import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserSubjectApiService {
    private url: string;
    header: HttpHeaders;

    constructor(private  http: HttpClient) {
        this.url = '/api/subjects/user';
        this.header = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('user')).token);
    }

    getUserInSubject(data: any): Promise<any> {

        let params = new HttpParams().set('code', data.code)
            .set('exam', data.exam)
            .set('subject', data.subject);


        return this.http.get(this.url, {params, headers: this.header}).toPromise().then()
            .catch();

    }


    deleteUserInSubject(data: any): Promise<any> {
        return this.http.delete(this.url + '/' + data.id, {headers: this.header}).toPromise().then().catch();
    }

    updateUserInSubject(data: any): Promise<any> {
        return this.http.patch(this.url + '/' + data.id, data, {headers: this.header}).toPromise().then().catch();
    }


    creatUserInSubject(data): Promise<any> {
        return this.http.post(this.url, data, {headers: this.header}).toPromise().then()
            .catch();
    }
}
