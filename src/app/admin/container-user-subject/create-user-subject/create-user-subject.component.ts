import {Component, Input, OnInit} from '@angular/core';
import {ExcelProssingService} from '../../../excel-prossing.service';
import {UserSubjectApiService} from '../../../services/api/user-subject-api.service';

@Component({
    selector: 'app-create-user-subject',
    templateUrl: './create-user-subject.component.html',
    styleUrls: ['./create-user-subject.component.css']
})
export class CreateUserSubjectComponent implements OnInit {
    @Input() be_register = true;
    listUserAllow = [];
    allChecked = false;

    constructor(private userInSubjectApi: UserSubjectApiService, private excel: ExcelProssingService) {
    }

    ngOnInit() {
    }

    updateAllChecked() {
        this.listUserAllow.forEach(value => {

            if (this.allChecked == true) {

                this.userInSubjectApi.creatUserInSubject(value).then((val: any) => {
                    if (val.success == true) {
                        value.isCheck = this.allChecked;
                        value.isRegisterComplete = true;
                    } else {
                        value.isRegisterComplete = false;
                        value.message = JSON.stringify(val.message);
                    }
                });
            }

        });
    }

    updateSingleChecked(i) {

        if (this.listUserAllow[i].isCheck == false) {
            this.allChecked = false;
        } else {
            this.userInSubjectApi.creatUserInSubject(this.listUserAllow[i]).then((val: any) => {
                if (val.success == true) {

                    this.listUserAllow[i].isRegisterComplete = true;
                } else {
                    this.listUserAllow[i].isRegisterComplete = false;
                    this.listUserAllow[i].message = JSON.stringify(val.message);
                }
            });
            this.allChecked = true;
            this.listUserAllow.forEach(value => {
                this.allChecked = this.allChecked && value.isCheck;
            });
        }
    }

    onFileChange($event, type) {
        const target: DataTransfer = <DataTransfer> ($event.target);

        let reader = new FileReader();
        reader.readAsBinaryString($event.target.files[0]);
        reader.onload = (data: any) => {
            const bstr: string = data.target.result;
            let dataUser = this.excel.getListUser(bstr);
            this.coverArray(dataUser);


        };

    }

    coverArray(data: Array<any>) {
        let exam;
        console.log(this.be_register)
        data.forEach((value: any, index) => {
            if (index == 0) {
                exam = value[0];
            } else if (index > 1) {
                this.listUserAllow.push({code: value[1], exam: exam, subject: value[2], isSend: false, be_register: this.be_register})
                ;
            }
        });
        console.log(this.listUserAllow);
    }

}
