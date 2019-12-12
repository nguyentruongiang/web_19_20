import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegisterApiService {
    url: string;

    constructor(private http: HttpClient) {
        this.url = 'api/exam-resgister/';
    }

    getListCanRegister(param) {
        return this.http.get(this.url).toPromise().then().catch();
    }

    getListMyRegister(param) {
        return this.http.get('api/student-resgister').toPromise().then().catch();
    }

    registerSchedule(data) {
        return this.http.post(this.url, data).toPromise().then().catch();
    }

    deleteSchedule(id) {
        return this.http.delete(this.url + id).toPromise().then().catch();
    }
}
