import {Component, OnInit} from '@angular/core';
import {Subject} from '../../../interface/subject';
import {HttpClient} from '@angular/common/http';
import {SubjectApiService} from '../../../services/api/subject-api.service';

@Component({
    selector: 'app-list-subject',
    templateUrl: './list-subject.component.html',
    styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit {

    listSubject = [];
    isVisible = false;
    title = 'Thêm môn học';
    newSubject: Subject;
    oldSubject: number;
    subjectName = '';

    constructor(private http: HttpClient, private subjectApi: SubjectApiService) {
        this.newSubject = {code: '', name: ''};
    }

    ngOnInit() {
        this.getListSubject();
    }

    getListSubject() {
        this.subjectApi.getListSubject(this.subjectName).then((value: any) => {
            if (value.success == true) {
                this.listSubject = value.subjects;
            }
        });

    }

    addNewSubject() {
        this.title = 'Thêm môn học';
        this.newSubject = {code: '', name: ''};
        this.isVisible = true;
    }

    editSubject(index) {
        this.title = 'Sửa thông tin môn học';
        this.isVisible = true;
        this.newSubject = Object.assign({}, this.listSubject[index]);
        this.oldSubject = index;

    }

    deleteSubject(index: number) {

        this.subjectApi.deleteSubject(this.listSubject[index].id).then((value: any) => {
            if (value.success == true) {
                this.listSubject.splice(index, 1);
                confirm(value.message);

            }
        });
    }

    handleCancel() {
        this.isVisible = false;

    }

    handleOk() {
        console.log(this.newSubject);
        this.isVisible = false;
        if (this.title == 'Thêm môn học') {
            this.subjectApi.createSubject(this.newSubject).then((value: any) => {
                    if (value.success == true) {
                        confirm(value.message);
                        this.newSubject.id = value.subject_id;
                        this.listSubject.push(this.newSubject);
                    } else {
                        confirm(value.message);
                    }
                }
            );
        } else {
            this.subjectApi.editSubject(this.newSubject).then((value: any) => {
                    if (value.success == true) {
                        confirm(value.message);
                        this.listSubject[this.oldSubject] = this.newSubject;
                    } else {
                        confirm(value.message);
                    }
                }
            );
        }


    }

    handleEditOk() {
        console.log(this.newSubject);

        this.http.put(`/api/subject/` + this.newSubject.id, this.newSubject).subscribe((res: any) => {

            confirm(res.message);
            if (res.success == true) {

                this.listSubject[this.oldSubject] = this.newSubject;
            }

        });
    }

}
