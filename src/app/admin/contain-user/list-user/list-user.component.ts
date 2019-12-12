import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExcelProssingService} from '../../../excel-prossing.service';
import {ManagerStudentService} from '../../../manager-student.service';
import {UserApiService} from '../../../services/api/user-api.service';
import {User} from '../../../interface/user';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
    file;
    isVisible = false;
    title: any;
    userInfromation: User = {
        username: '',
        password: '',
        full_name: '',
        code: ''
    };
    index: number;
    listOfData = [];
    code: any = '';

    constructor(private http: HttpClient, private excel: ExcelProssingService, private mangerStudent: ManagerStudentService, private userApi: UserApiService) {

    }

    async ngOnInit() {
        this.code = '';
        await this.getListUser();
    }


    async getListUser() {

        await this.userApi.searchUser(
            {
                code: this.code
            }
        ).then((val: any) => {
            if (val.success == true) {
                this.listOfData = val.users;
            } else {
                confirm(val.message);
            }
        });
    }

    handleCancel() {
        this.isVisible = false;
    }

    handleOk() {
        console.log(this.userInfromation);
        if (this.title == 'Sửa thông tin') {


            this.userApi.editUser(this.userInfromation).then((val: any) => {
                if (val.success == true) {
                    this.isVisible = false;
                    this.listOfData[this.index] = Object.assign({}, this.userInfromation);
                } else {
                    confirm(val.message);
                }

            });


        } else {
            this.userApi.changePasswordUser(this.userInfromation).then((val: any) => {
                if (val.success == true) {
                    this.isVisible = false;
                    confirm('Thay đôi mât của tài khoản' + this.userInfromation.username + 'thanh công');
                } else {
                    confirm(val.message);
                }
            });
        }

    }

    showModal(i): void {
        this.title = 'Sửa thông tin';

        this.index = i;
        let data: any = Object.assign({}, this.listOfData[i]);

        data.password = '';
        this.userInfromation = data;
        console.log(this.userInfromation);
        this.isVisible = true;
    }

    showModalChangePassword(i): void {
        this.title = 'Sửa mật khẩu';
        console.log(this.listOfData[i]);
        this.index = i;
        let data: any = Object.assign({}, this.listOfData[i]);
        data.password = '';
        this.userInfromation = data;
        this.isVisible = true;
    }

    handleChangePasswordOk() {


    }

    deleteUser(i) {
        this.userApi.deleteUser(this.listOfData[i].id).then((val: any) => {
            if (val.success == true) {
                this.listOfData.splice(i, 1);
            } else {
                confirm(val.message);
            }
        });
    }

}
