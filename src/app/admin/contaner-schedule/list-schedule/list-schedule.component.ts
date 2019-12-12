import {Component, OnInit} from '@angular/core';
import {ScheduleApiService} from '../../../services/api/schedule-api.service';
import {ExamApiService} from '../../../services/api/exam-api.service';
import {SubjectApiService} from '../../../services/api/subject-api.service';
import {RoomApiService} from '../../../services/api/room-api.service';
import {PdfService} from '../../../services/pdf.service';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-list-schedule',
    templateUrl: './list-schedule.component.html',
    styleUrls: ['./list-schedule.component.css']
})
export class ListScheduleComponent implements OnInit {

    listOfData = [];
    isVisible = false;
    isUpdateVisible = false;
    title: string;
    index: any;
    examName: any = '';
    subjectName: any = '';
    roomName: any = '';
    schedule: any;
    listExam = [];
    listSubject = [];
    listRoom = [];
    day: any = '';

    constructor(private examApi: ExamApiService, private subjectApi: SubjectApiService, private scheduleAPi: ScheduleApiService, private roomApi: RoomApiService,
                private pdf: PdfService, private http: HttpClient) {

        this.schedule = {};
    }

    ngOnInit() {
        this.getSchedule();
    }

    onChangeDate(result: Date): void {

        this.day = result.toISOString().slice(0, 10);
        this.getSchedule();

    }

    searchExam($event) {

        this.examApi.getExam($event).then((value: any) => {
                if (value.success == true) {
                    this.listExam = value.exams;
                }
            }
        );


    }

    searchSubject($event) {


        this.subjectApi.getListSubject($event).then((value: any) => {
                if (value.success == true) {
                    this.listSubject = value.subjects;
                }
            }
        );

    }

    searchRoom(value: string) {
        this.roomApi.getListRoom(value).then((value: any) => {
            if (value.success == true) {
                this.listRoom = value.rooms;
            }
        });

    }

    getSchedule() {

        this.scheduleAPi.getSchedule({
            subject: this.subjectName,
            room: this.roomName,
            day: this.day,
            exam: this.examName
        }).then((value: any) => {
            if (value.success == true) {
                this.listOfData = value.schedules;


            } else {
                confirm(value.message);
            }
        });


    }

    editSchedule(i) {
        this.index = i;
        this.title = 'Sửa ca thi';
        this.schedule = Object.assign({}, this.listOfData[i]);

        this.schedule.end_time = new Date('1995-12-17T' + this.schedule.end_time);

        this.schedule.start_time = new Date('1995-12-17T' + this.schedule.start_time);


        this.isVisible = true;

    }

    deleteSchdedule(i) {

        this.scheduleAPi.deleteSchedule(this.listOfData[i].id).then((value: any) => {
            if (value.success == true) {
                this.listOfData.splice(i, 1);


            } else {
            }
        });

    }

    showModal(): void {
        this.title = 'Tạo ca thi';
        this.isVisible = true;

    }

    handleOk(): void {

        if (this.title == 'Tạo ca thi') {
            this.scheduleAPi.createSchdedule(this.schedule).then((value: any) => {
                if (value.success == true) {
                    this.isVisible = false;
                    let data = Object.assign({}, this.schedule);
                    data.no_of_student = 0;
                    this.listOfData.push(data);
                    console.log(data);
                    this.schedule = {};
                    confirm(value.message);


                } else {
                    confirm(value.message);
                }
            });
        } else {
            this.scheduleAPi.editSchedule(this.schedule).then((value: any) => {
                if (value.success == true) {
                    this.isVisible = false;


                    let dta = Object.assign({}, this.schedule);
                    console.log((dta));
                    this.schedule = {};
                    dta.start_time = dta.start_time.toTimeString().slice(0, 5);
                    dta.end_time = dta.end_time.toTimeString().slice(0, 5);
                    this.listOfData[this.index] = dta;
                    confirm(value.message);


                } else {
                    confirm(value.message);
                }
            });

        }


    }


    handleCancel(): void {

        this.isVisible = false;

        this.schedule = {};
    }

    dowload(i) {
        let schedule=this.listOfData[i]
        this.http.get('/api/schedules/' + this.listOfData[i].id + '/users').subscribe((res: any) => {
                if (res.success == true) {
                    let bodyData = [
                        [{text: 'STT', style: 'tableHeader', alignment: 'center'}, {
                            text: 'MSV',
                            style: 'tableHeader',
                            alignment: 'center'
                        },
                            {text: 'SBD', style: 'tableHeader', alignment: 'center'}, {
                            text: 'Tên thí sinh',
                            style: 'tableHeader',
                            alignment: 'center'
                        }, {text: 'Ch? ký', style: 'tableHeader', alignment: 'center'}],

                    ];
                    let data: Array<any> = res.data;
                    console.log(data);
                    for (let i = 0; i < data.length; i++) {
                        console.log(data[i]);
                        let item = [{text: i+1, style: 'tableHeader', alignment: 'center'}, {
                            text: data[i].code,
                            style: 'tableHeader',
                            alignment: 'center'
                        },
                            {text: '1', style: 'tableHeader', alignment: 'center'},
                            data[i].full_name, ''];
                        bodyData[i + 1] = item;
                    }
                    console.log(bodyData);
                    this.pdf.printListUserInchedule(bodyData,schedule);
                }
            }
        );
    }


}
