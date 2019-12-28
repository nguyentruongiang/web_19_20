import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegisterApiService {
    url: string;
    header: HttpHeaders;

    constructor(private http: HttpClient) {
        this.url = 'api/exam-resgister/';
        this.header = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('user')).token);
    }

    getListCanRegister(param) {
        return this.http.get(this.url, {headers: this.header}).toPromise().then().catch();
    }

    getListMyRegister(param) {
        let params = null;
        if (param.exam != undefined) {
            params = new HttpParams().set('exam', param.exam);
        }

        return this.http.get('api/student-resgister', {headers: this.header, params: params}).toPromise().then().catch();
    }

    registerSchedule(data) {
        return this.http.post(this.url, data, {headers: this.header}).toPromise().then().catch();
    }

    deleteSchedule(id) {
        return this.http.delete(this.url + id, {headers: this.header}).toPromise().then().catch();
    }
}
