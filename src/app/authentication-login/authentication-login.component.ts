import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
  styleUrls: ['./authentication-login.component.css']
})

export class AuthenticationLoginComponent implements OnInit {
 validateForm: FormGroup;
 public fb: FormBuilder= new FormBuilder()

 constructor( public http:HttpClient) {

}
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let user=this.validateForm.getRawValue()
  this.http.post('https://web1920.herokuapp.com/api/authentication',{username:user.userName,password:user.password}).subscribe(e=>{
    console.log(e)
  })
  }

  

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
