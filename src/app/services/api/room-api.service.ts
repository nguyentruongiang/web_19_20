import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RoomApiService {
    url: string;

    constructor(private http: HttpClient) {
        this.url = '/api/rooms/';
    }


    getListRoom(param): Promise<any> {
        return this.http.get(this.url).toPromise().then().catch();
    }

}
