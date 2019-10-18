import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
interface User{
    username?:string,
     password?:string
}
@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
  styleUrls: ['./authentication-login.component.css']
})

export class AuthenticationLoginComponent implements OnInit {
  user: User
  constructor(private http: HttpClient) {
    this.user={
     username:"",
     password:""
   }
   }

  ngOnInit() {
  }
onSubmit(){
  console.log(this.user)

}
}
