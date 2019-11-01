import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exam-registration',
  templateUrl: './exam-registration.component.html',
  styleUrls: ['./exam-registration.component.css']
})
export class ExamRegistrationComponent implements OnInit {
  listOfData = [

  ];
  yourSchedule = [

  ]
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getSchedule()
  }
  getSchedule() {
    let schedule = []
    let yourSchedule = []
    this.http.get('http://localhost:8000/api/exam-resgister/').subscribe((res: any) => {



    
      res.can_schedule.forEach(value => {
       
        value.shift.forEach(val => {
     
          schedule .push({
            id:value.id,
            subject_id: value.subject_id,
            schedule_id: val.id,
            room_id: val.room_id.name+'-'+val.room_id.location,
            day :val.day,
            time_start: val.time_start.slice(0,5),
            time_end: val.time_start.slice(0,5),
            no_of_student : val.no_of_student+'/'+val.room_id.max_student,
            isLoading:false,
            status : value.status
          })
          this.listOfData = schedule
        })
        
     

      })

      
      res.your_schedule.forEach(value => {
       
        value.shift.forEach(val => {
     
          yourSchedule.push({
            id:value.id,
            subject_id: value.subject_id,
            schedule_id: val.id,
            room_id: val.room_id.name+'-'+val.room_id.location,
            day :val.day,
            time_start: val.time_start.slice(0,5),
            time_end: val.time_start.slice(0,5),
            no_of_student : val.no_of_student+'/'+val.room_id.max_student,
            isLoading:false,
            status : value.status
          })
          this.yourSchedule=yourSchedule
          console.log(val)
        })
      })
    })

  }
  register(index){
    console.log(index)
    this.http.post('/api/exam-resgister/',{schedule_id:this.listOfData[index].schedule_id}).subscribe((res:any)=>{
      confirm(res.message)
    })
 
  }
  deleteShift(index){
    console.log(index)
    console
    let schedule_id=this.yourSchedule[index].schedule_id
    this.http.delete(`/api/exam-resgister/`+schedule_id).subscribe((res:any)=>{
      confirm(res)
    })
  }
  

}