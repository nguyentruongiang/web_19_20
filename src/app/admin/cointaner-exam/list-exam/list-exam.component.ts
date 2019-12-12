import {Component, OnInit} from '@angular/core';
import {Exam} from '../../../interface/exam';
import {HttpClient} from '@angular/common/http';
import {ExamApiService} from '../../../services/api/exam-api.service';

@Component({
    selector: 'app-list-exam',
    templateUrl: './list-exam.component.html',
    styleUrls: ['./list-exam.component.css']
})
export class ListExamComponent implements OnInit {
    isVisible = false;
    exam: Exam;
    listExam = [];
    examName = '';

    constructor(private examApi: ExamApiService, private http: HttpClient) {
        this.exam = {name: '', status: true};
    }

    ngOnInit() {
        this.getListExam();
    }

    getListExam() {
        this.examApi.getExam(this.examName).then((value: any) => {
            if (value.success == true) {
                this.listExam = value.exams;
                this.listExam.forEach(val => {
                    val.isEdit = false;
                });
            }
        });

    }

    handleCancel() {
        this.isVisible = false;

    }

    handleOk() {
        this.isVisible = false;
        this.examApi.creatExam(this.exam).then(value => {
            if (value.success = true) {
                let data = Object.assign({}, this.exam);
                data.id = value.exam_id;
                this.exam = {name: '', status: true};
                this.listExam.push(data);
            } else {
                confirm(value.message);
            }
        });

    }

    addExam() {
        this.isVisible = true;

    }

    deleteExam(index) {
        this.examApi.deleteExam(this.listExam[index].id).then((value: any) => {
            if (value.success == true) {
                confirm(value.message);
                this.listExam.splice(index, 1);
            } else {
                confirm(value.message);
            }
        });

    }

    editExam(index) {
        this.listExam[index].isEdit = true;

    }

    editSubmitExam(index) {
        console.log(this.listExam[index]);

        let data: Exam = this.listExam[index];
        this.examApi.editExam(data).then((val: any) => {
            if (val.success == true) {

                confirm(val.message);
                this.listExam[index].isEdit = false;
            } else {
                confirm(val.message);
            }
        });

    }

    change(i, status) {
        this.listExam[i].status = status;
    }

    editCancel(i) {
        this.listExam[i].isEdit = false;
    }
}
