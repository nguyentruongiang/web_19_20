import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ScheduleApiService {
    url: string;

    constructor(private  http: HttpClient) {
        this.url = '/api/schedules/';
    }

    createSchdedule(data: any): Promise<any> {
        let dta = Object.assign({}, data);
        dta.start_time = dta.start_time.toTimeString().slice(0, 5);
        dta.end_time = dta.end_time.toTimeString().slice(0, 5);

        return this.http.post(this.url, dta).toPromise().then().catch();
    }

    getSchedule(data): Promise<any> {
        let params = new HttpParams().set('subj', data.subject)
            .set('exam', data.exam)
            .set('room', data.room)
            .set('day', data.day);
        return this.http.get(this.url, {params}).toPromise().then().catch();
    }


    editSchedule(data): Promise<any> {
        let dta = Object.assign({}, data);
        dta.start_time = dta.start_time.toTimeString().slice(0, 5);
        dta.end_time = dta.end_time.toTimeString().slice(0, 5);

        return this.http.put(this.url + data.id, dta).toPromise().then().catch();
    }

    deleteSchedule(id): Promise<any> {
        return this.http.delete(this.url + id).toPromise().then().catch();
    }
}
