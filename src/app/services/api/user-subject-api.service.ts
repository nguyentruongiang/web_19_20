import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserSubjectApiService {
    private url: string;

    constructor(private  http: HttpClient) {
        this.url = '/api/subjects/user';
    }

    getUserInSubject(data:any): Promise<any> {

        let params = new HttpParams().set('code', data.code)
            .set('exam',data.exam)
         .set('subject',data.subject);



        return this.http.get(this.url, {params}).toPromise().then()
            .catch();

    }


    deleteUserInSubject(data: any): Promise<any> {
        return this.http.delete(this.url + '/' + data.id).toPromise().then().catch();
    }

    updateUserInSubject(data: any): Promise<any> {
        return this.http.patch(this.url + '/' + data.id, data).toPromise().then().catch();
    }


    creatUserInSubject(data): Promise<any> {
        return this.http.post(this.url, data).toPromise().then()
            .catch();
    }
}
