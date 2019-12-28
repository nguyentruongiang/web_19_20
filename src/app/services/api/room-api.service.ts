import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RoomApiService {
    url: string;
    header: HttpHeaders;

    constructor(private http: HttpClient) {
        this.url = '/api/rooms/';
        this.header = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('user')).token);
    }


    getListRoom(param): Promise<any> {
        return this.http.get(this.url,{headers: this.header}).toPromise().then().catch();
    }

}
