import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerStudentService {

  constructor(private http:HttpClient) { }
  createUser(){

  }
  createUserInSubject(data,be_register){
  data.forEach((value:any)=>{
      if(value.isCheck){
        value.be_register=be_register
      this.http.post('/api/subjects/user',value).subscribe((res:any)=>{
        if (res.success==true){
          value.isRegisterComplete= true
          value.isCheck=false
        }
        else{
          value.isRegisterComplete= false
          value.message =JSON.stringify(res.message)
        }
    
      })
    }
    })
    console.log(data)
  }
  creatOneUserAllow(data){
   this.http.post('/api/subjects/user',data).subscribe((res:any)=>{
     confirm(res.message)
   })
  }
  createUserBand(){

  }
}
