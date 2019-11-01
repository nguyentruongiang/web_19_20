import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../interface/subject';

@Component({
  selector: 'app-manager-subject',
  templateUrl: './manager-subject.component.html',
  styleUrls: ['./manager-subject.component.css']
})
export class ManagerSubjectComponent implements OnInit {
  listSubject=[]
  isVisible =false
  newSubject :Subject
  constructor(private http:HttpClient) { 
    this.newSubject={code:"",name:""}
  }

  ngOnInit() {
    this.getListSubject()
  }
  getListSubject(){
    this.http.get(`https://web1920.herokuapp.com/api/subjects/`).subscribe((res:any)=>{

      this.listSubject= res.subjects
      
    })

  }
  
  addNewSubject(){
    this.isVisible= true
  }

  editSubject(){

  }
  deleteSubject(){

  }
  handleCancel(){
    this.isVisible = false 
  }
  handleOk(){
    console.log(this.newSubject)
    this.isVisible = false 
    this.http.post(`https://web1920.herokuapp.com/api/subjects/`,this.newSubject).subscribe((res:any)=>{

      confirm(res.message)
      
    })
  }
  
}
