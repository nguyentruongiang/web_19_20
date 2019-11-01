import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Schedule{
  exam_id?:number,
  subject_id?:number,
  room_id ?:number,
  day?:string,
  start_time?:Date,
  end_time?:Date
  }
@Component({
  selector: 'app-modal-create-schedule',
  templateUrl: './modal-create-schedule.component.html',
  styleUrls: ['./modal-create-schedule.component.css']
})
export class ModalCreateScheduleComponent implements OnInit {
  @Input() shift:Schedule
  listExam =[]
  listSubject =[]
  listRoom=[]
   
  constructor(private http:HttpClient) {
    this.shift={}
   }

  ngOnInit() {
  }
  searchExam(){
    this.http.get('http://localhost:8000/api/exams/').subscribe((res:any)=>{
      this.listExam= res.exams
    })

  }
  searchSubject(value:string){
    this.http.get('http://localhost:8000/api/subjects/').subscribe((res:any)=>{
      this.listSubject= res.subjects
      console.log("đâs")
    })
  }
  searchRoom(value:string){
    this.http.get('http://localhost:8000/api/rooms/').subscribe((res:any)=>{
      this.listRoom= res.rooms
      console.log("đâs")
    })
  }
  createSchedule(){
   

  }
  onChangeDate(result: Date): void {
   console.log(result.toISOString().slice(0,10))
   this.shift.day= result.toISOString().slice(0,10);
   console.log(this.shift)
  }
  onChangeStartTime(result: any): void {
    console.log(result)
    console.log(result.toISOString().slice(0,10))
    this.shift.day= result.toISOString().slice(0,10);
    console.log(this.shift)
   }
 
}
