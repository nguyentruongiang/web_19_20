import {Component, OnInit} from '@angular/core';
import {RegisterApiService} from '../../services/api/register-api.service';
import {PdfService} from '../../services/pdf.service';


@Component({
    selector: 'app-student-schedule',
    templateUrl: './student-schedule.component.html',
    styleUrls: ['./student-schedule.component.css']
})
export class StudentScheduleComponent implements OnInit {

    listOfData = [];
    yourSchedule = [];

    constructor(private pdf: PdfService, private registerApi: RegisterApiService) {

    }

    ngOnInit() {
        this.getSchedule();
    }

    getSchedule() {
        let schedule = [];

        this.registerApi.getListCanRegister('').then((res: any) => {
            res.schedule.forEach(value => {

                value.shift.forEach(val => {
                    console.log(val);
                    schedule.push({
                        id: value.id,
                        subject_id: value.subject_id,
                        schedule_id: val.id,
                        room_id: val.room_id.name + '-' + val.room_id.location,
                        day: val.day,
                        time_start: val.time_start.slice(0, 5),
                        time_end: val.time_start.slice(0, 5),
                        no_of_student: val.no_of_student,
                        max_student: val.room_id.max_student,
                        isLoading: false,
                        status: !value.status,
                        exam: value.exam
                    });

                    this.listOfData = schedule;
                });
            });
        });
        this.getMySchedule();

    }

    getMySchedule() {
        this.registerApi.getListMyRegister('').then((res: any) => {
            if (res.success == true) {
                this.yourSchedule = res.schedules;
            } else {
                confirm('Có lỗi xảy ra');
            }
        });
    }

    register(index) {
        console.log(index);
        this.registerApi.registerSchedule({schedule_id: this.listOfData[index].schedule_id}).then((value: any) => {
            confirm(value.message);
            if (value.success == true) {
                this.listOfData[index].status = true;
                this.listOfData[index].no_of_student++;
                this.listOfData.forEach(value => {
                    if (value.subject_id == this.listOfData[index].subject_id) {
                        value.status = true;
                    }
                });
                this.getMySchedule();
            }
        });


    }

    deleteShift(index) {
        console.log(index);

        let schedule_id = this.yourSchedule[index].schedule.id;
        this.registerApi.deleteSchedule(schedule_id).then((val: any) => {
            if (val.success == true) {
                confirm(val.message);
                this.listOfData.forEach(value => {
                    if (value.schedule_id== schedule_id) {

                        value.no_of_student--;
                    }
                    if (value.subject_id == this.listOfData[index].subject_id) {
                        value.status = false;

                    }
                });
                this.yourSchedule.splice(index, 1);
            } else {
                confirm(val.message);
            }
        });

    }

    printRegistion() {
        // this.pdf.printRegister(this.yourSchedule);
    }


}
