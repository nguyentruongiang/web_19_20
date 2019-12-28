import {Component, OnInit} from '@angular/core';
import {ExamApiService} from '../../services/api/exam-api.service';
import {RegisterApiService} from '../../services/api/register-api.service';
import {PdfService} from '../../services/pdf.service';


@Component({
    selector: 'app-print-registration',
    templateUrl: './print-registration.component.html',
    styleUrls: ['./print-registration.component.css']
})
export class PrintRegistrationComponent implements OnInit {
    examName = '';
    listExam = [];
    yourSchedule = [];

    constructor(private examApi: ExamApiService, private registerApi: RegisterApiService, private pdf: PdfService) {
    }

    ngOnInit() {
    }

    print(i) {

        this.pdf.printRegister( this.yourSchedule[i]);
    }

    searchExam($event) {

        this.examApi.getExam($event).then((value: any) => {
                if (value.success == true) {
                    this.listExam = value.exams;
                }
            }
        );


    }

    getMySchedule() {
        this.registerApi.getListMyRegister({exam: this.examName}).then((res: any) => {
            if (res.success == true) {
                this.yourSchedule = res.schedules;
            } else {
                confirm('Có lỗi xảy ra');
            }
        });
    }
}
