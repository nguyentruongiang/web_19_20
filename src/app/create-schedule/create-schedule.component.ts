import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {
  listOfData = [
   
  ];
  data= null
  exam :any
  schedule :any

  
  constructor(private http :HttpClient) {
    this.exam= {
      key: "",
      name: "",
      age: "",
      address: ""
    }
    this.schedule= {}
    }
    isVisible = false;
    

  ngOnInit() {
    this.getSchedule()
  }
  addSchedule(){
    
  }
  getSchedule(){
    this.http.get('http://localhost:8000/api/schedules/').subscribe((res:any)=>{
    this.listOfData= res.schedules
 
   
    })
  
  }
  showModal(): void {
    this.isVisible = true;

  }

  handleOk(): void {
    console.log(new Date().toTimeString())
    this.schedule.start_time= this.schedule.start_time.toTimeString().slice(0,5)
    this.schedule.end_time= this.schedule.end_time.toTimeString().slice(0,5)
    this.http.post('http://localhost:8000/api/schedules/',this.schedule).subscribe((res:any)=>{
      this.isVisible = false;
      confirm(res.message)
    })
    
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
 
 
}
