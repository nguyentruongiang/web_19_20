import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-authentication-login',
    templateUrl: './authentication-login.component.html',
    styleUrls: ['./authentication-login.component.css']
})

export class AuthenticationLoginComponent implements OnInit {
    validateForm: FormGroup;
    public fb: FormBuilder = new FormBuilder();

    constructor(public http: HttpClient, private  router: Router) {

    }

    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        const user = this.validateForm.getRawValue();
        this.http.post('api/authentication', {username: user.userName, password: user.password}).subscribe((res: any) => {

            if (res.success == true) {
                localStorage.setItem('user', JSON.stringify((res)));
                this.router.navigate(['/dashboard']);
                console.log(res);
            }
        });
    }


    ngOnInit(): void {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
    }
}
