import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
    selector: 'app-exam-registration',
    templateUrl: './exam-registration.component.html',
    styleUrls: ['./exam-registration.component.css']
})
export class ExamRegistrationComponent implements OnInit {
    listOfData = [];
    yourSchedule = [];

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.getSchedule();
    }

    getSchedule() {
        let schedule = [];
        let yourSchedule = [];
        this.http.get('http://localhost:8000/api/exam-resgister/').subscribe((res: any) => {

            console.log(res.can_schedule);
            res.can_schedule.forEach(value => {

                value.shift.forEach(val => {
                    console.log(val);
                    schedule.push({
                        id: value.id,
                        subject_id: value.subject_id,
                        schedule_id: val.id,
                        room_id: val.room_id.name + '-' + val.room_id.location,
                        day: val.day,
                        time_start: val.time_start.slice(0, 5),
                        time_end: val.time_start.slice(0, 5),
                        no_of_student: val.no_of_student + '/' + val.room_id.max_student,
                        isLoading: false,
                        status: value.status
                    });

                    this.listOfData = schedule;
                });


            });


            res.your_schedule.forEach(value => {

                value.shift.forEach(val => {

                    yourSchedule.push({
                        id: value.id,
                        subject_id: value.subject_id,
                        schedule_id: val.id,
                        room_id: val.room_id.name + '-' + val.room_id.location,
                        day: val.day,
                        time_start: val.time_start.slice(0, 5),
                        time_end: val.time_start.slice(0, 5),
                        no_of_student: val.no_of_student + '/' + val.room_id.max_student,
                        isLoading: false,
                        status: value.status
                    });
                    this.yourSchedule = yourSchedule;

                });
            });
        });

    }

    register(index) {
        console.log(index);
        this.http.post('/api/exam-resgister/', {schedule_id: this.listOfData[index].schedule_id}).subscribe((res: any) => {
            confirm(res.message);
        });

    }

    deleteShift(index) {
        console.log(index);

        let schedule_id = this.yourSchedule[index].schedule_id;
        this.http.delete(`/api/exam-resgister/` + schedule_id).subscribe((res: any) => {
            confirm(res);
        });
    }

    print(i) {
         const documentDefinition = {
      header: [


      ],
      watermark: { text: 'Trường Đại học ABCD', angle: 70 },

      content: [
        {text:'Trường Đại học ABCD',alignment: 'center'},

        { text: 'Phiếu dự thi ', alignment: 'center',defaultStyle: {
          fontSize: 36,
          bold: true
        } },

        {
          columns: [

            { text: ' Họ và tên:  Nguyễn Trường A', alignment: 'left' },
            { text: ' Kì thi: Kì thi giừa kì 2018-2019', alignment: 'right' },
            { text: ' Mã sinh viên: 17020704', alignment: 'center' }

          ]
        },
        '',
        '',
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ["*","*", '*', 'auto', "*", '*' ,"*","*"],

            body: [
              [ 'Mã học phần','Môn học','Phòng thi', 'Địa điểm', 'Ngày thi','Giờ bắt đầu', 'Giờ kết thúc',"Chỗ ngồi" ],
              [ 'Int3306','Lập trình hướng đôi tượng','Phòng 1', "20-11-2019",'GD-2', '12:30', '14:30',"2" ],

            ]
          }
        }


    ]
    ,
    footer: {
      columns: [
        'Left part',
        { text: 'Right part', alignment: 'right' }
      ]
    }
  };
          pdfMake.createPdf(documentDefinition).open();
    }

}
