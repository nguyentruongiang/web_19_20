import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SubjectApiService {
    url: string;
    header: HttpHeaders;

    constructor(private http: HttpClient) {
        this.url = '/api/subjects/';
        this.header = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('user')).token);
    }

    getListSubject(subjectName): Promise<any> {
        let params = new HttpParams().set('subject', subjectName);
        return this.http.get(this.url, {params, headers: this.header}).toPromise().then().catch();
    }

    createSubject(data) {
        return this.http.post(this.url, data, {headers: this.header}).toPromise().then().catch();
    }

    editSubject(data: any) {
        return this.http.put(this.url + data.id, data, {headers: this.header}).toPromise().then().catch();
    }

    deleteSubject(id): Promise<any> {
        return this.http.delete(this.url + id, {headers: this.header}).toPromise().then().catch();
    }


}
