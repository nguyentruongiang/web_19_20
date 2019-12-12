import {Component, OnInit} from '@angular/core';
import {UserSubjectApiService} from '../../../services/api/user-subject-api.service';

@Component({
    selector: 'app-list-user-subject',
    templateUrl: './list-user-subject.component.html',
    styleUrls: ['./list-user-subject.component.css']
})
export class ListUserSubjectComponent implements OnInit {
    lisUserInSubject = [];
    code: any = '';
    exam: any = '';
    subject: any = '';

    constructor(private  userInSubjectApi: UserSubjectApiService) {
    }

    ngOnInit() {
        this.getUserInSubject();
    }

    getUserInSubject() {
        this.userInSubjectApi.getUserInSubject({code: this.code, subject: this.subject, exam: this.exam})
            .then((val: any) => {
                if (val.success == true) {
                    this.lisUserInSubject = val.data;
                }
            });
    }

    deleteUserInSubject(i) {
        this.userInSubjectApi.deleteUserInSubject(this.lisUserInSubject[i]).then((val: any) => {
            if (val.success == true) {
                confirm('Xoa thành công');
                this.lisUserInSubject.splice(i, 1);
            } else {
                confirm(val.message);
            }
        });
    }

    updateserInSubject(i) {
        this.userInSubjectApi.updateUserInSubject(this.lisUserInSubject[i]).then((val: any) => {
            if (val.success == true) {
                confirm('Thay đổi thành công');
            } else {
                confirm('Thay đổi thất bại ');
            }
        });
    }
}
