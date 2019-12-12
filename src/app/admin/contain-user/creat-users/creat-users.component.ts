import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../interface/user';
import {ExcelProssingService} from '../../../excel-prossing.service';
import {UserApiService} from '../../../services/api/user-api.service';

@Component({
    selector: 'app-creat-users',
    templateUrl: './creat-users.component.html',
    styleUrls: ['./creat-users.component.css']
})
export class CreatUsersComponent implements OnInit {

    listUser = [];
    allChecked = false;

    constructor(private http: HttpClient, private excel: ExcelProssingService, private useApi: UserApiService) {
    }

    ngOnInit() {

    }


    updateAllChecked() {
        this.listUser.forEach(value => {

            if (this.allChecked == true) {
                this.useApi.createUser(value).then((val: any) => {
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

        if (this.listUser[i].isCheck == false) {
            this.allChecked = false;
        } else {
            this.useApi.createUser(this.listUser[i]).then((val: any) => {
                if (val.success == true) {

                    this.listUser[i].isRegisterComplete = true;
                } else {
                    this.listUser[i].isRegisterComplete = false;
                    this.listUser[i].message = JSON.stringify(val.message);
                }
            });
            this.allChecked = true;
            this.listUser.forEach(value => {
                this.allChecked = this.allChecked && value.isCheck;
            });
        }
    }

    onFileChange($event) {
        const target: DataTransfer = <DataTransfer> ($event.target);
        console.log($event.srcElement.files);
        var reader = new FileReader();
        reader.readAsBinaryString($event.target.files[0]);
        reader.onload = (data: any) => {
            const bstr: string = data.target.result;
            let dataUser = this.excel.getListUser(bstr);
            this.coverArray(dataUser);

        };

    }

    coverArray(data: Array<any>) {
        data.forEach((value: any, index) => {
            if (index > 0) {
                let user: User = {code: value[1], username: value[2], password: value[3], full_name: value[4]};
                this.listUser.push(user);
            }
        });
    }

}
