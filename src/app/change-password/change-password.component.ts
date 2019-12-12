import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  password:any
  constructor() { 
    this.password={old_password:"",new_passworrd:""}
  }

  ngOnInit() {
  }

}
