import { Component, OnInit } from '@angular/core';
import  pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-print-registration',
  templateUrl: './print-registration.component.html',
  styleUrls: ['./print-registration.component.css']
})
export class PrintRegistrationComponent implements OnInit {
  yourSchedule = [{ name: "phongthien", subject_id: "name" }]
  constructor() { }

  ngOnInit() {
  }
  print(index) {

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
