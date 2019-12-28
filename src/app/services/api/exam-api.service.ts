import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ExamApiService {
    url: string;
    header: HttpHeaders;

    constructor(private  http: HttpClient, private router: Router) {
        this.url = '/api/exams/';
        this.header = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('user')).token);
    }

    creatExam(data): Promise<any> {
        return this.http.post(this.url, data, {headers: this.header}).toPromise().then().catch((e) => {
            localStorage.clear();
            this.router.navigate(['/welcome/login']);
        });
    }

    getExam(examName): Promise<any> {
        let params = new HttpParams().set('exam', examName);
        return this.http.get(this.url, {params, headers: this.header}).toPromise().then().catch((e) => {
            localStorage.clear();
            this.router.navigate(['/welcome/login']);
        });
    }

    editExam(data: any): Promise<any> {
        return this.http.put(this.url + data.id, data, {headers: this.header}).toPromise().then().catch((e) => {
            localStorage.clear();
            this.router.navigate(['/welcome/login']);
        });
    }

    deleteExam(id): Promise<any> {
        return this.http.delete(this.url + id, {headers: this.header}).toPromise().then().catch((e) => {
            localStorage.clear();
        });
    }
}

