import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SubjectApiService {
    url: string;

    constructor(private http: HttpClient) {
        this.url = '/api/subjects/';
    }

    getListSubject(subjectName): Promise<any> {
        let params = new HttpParams().set('subject', subjectName);
        return this.http.get(this.url, {params}).toPromise().then().catch();
    }

    createSubject(data) {
        return this.http.post(this.url, data).toPromise().then().catch();
    }

    editSubject(data: any) {
        return this.http.put(this.url + data.id, data).toPromise().then().catch();
    }

    deleteSubject(id): Promise<any> {
        return this.http.delete(this.url + id).toPromise().then().catch();
    }


}
