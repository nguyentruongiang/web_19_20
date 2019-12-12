import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExamApiService} from '../../../services/api/exam-api.service';
import {SubjectApiService} from '../../../services/api/subject-api.service';
import {RoomApiService} from '../../../services/api/room-api.service';

interface Schedule {
    exam_id?: number,
    subject_id?: number,
    room_id?: number,
    day?: string,
    start_time?: Date,
    end_time?: Date
}


@Component({
    selector: 'app-schedule-information',
    templateUrl: './schedule-information.component.html',
    styleUrls: ['./schedule-information.component.css']
})
export class ScheduleInformationComponent implements OnInit {

    @Input() shift: any;
    listExam = [];
    listSubject = [];
    listRoom = [];
    date;

    constructor(private examApi: ExamApiService, private subjectApi: SubjectApiService,
                private roomApi:RoomApiService) {
        this.shift = {
            exam_id: ''
        };

    }

    ngOnInit() {
    }

    getMaxStudent(data) {
        this.listRoom.forEach(value => {
            if (value.id == data) {
                this.shift.max_student = value.max_student;
                this.shift.room = value.name+'-'+value.location
            }
        });

    }

    getExamName(data) {
        this.listExam.forEach(value => {
            if (value.id == data) {
                this.shift.exam = value.name;
            }
        });
    }

    getSubjectName(data) {
        this.listSubject.forEach(value => {
            if (value.id == data) {
                this.shift.subject = value.name;
            }
        });
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
        this.roomApi.getListRoom(value).then((value:any)=>{
            if(value.success==true){
                  this.listRoom = value.rooms;
            }
        })

    }

    createSchedule() {


    }

    onChangeDate(result: Date): void {
        console.log(result.toISOString().slice(0, 10));
        this.shift.day = result.toISOString().slice(0, 10);
        console.log(this.shift);
    }


}
