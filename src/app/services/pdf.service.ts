import {Injectable} from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
    providedIn: 'root'
})
export class PdfService {

    constructor() {
    }

    printRegister(data: []) {
        let fm = {};
        pdfMake.createPdf(fm).open();
    }

    // buildodel(data) {
    //     let bodyData = [
    //         [{text: 'STT', style: 'tableHeader', alignment: 'center'}, {
    //             text: 'MSV',
    //             style: 'tableHeader',
    //             alignment: 'center'
    //         },
    //             {text: 'SBD', style: 'tableHeader', alignment: 'center'}, {
    //             text: 'Tên thí sinh',
    //             style: 'tableHeader',
    //             alignment: 'center'
    //         }, {text: 'Ch? ký', style: 'tableHeader', alignment: 'center'}],
    //
    //     ];
    //     for (let i = 0; i < data.length; i++) {
    //         console.log(data[i]);
    //         let item = [{text: '1', style: 'tableHeader', alignment: 'center'}, {
    //             text: data[i].code,
    //             style: 'tableHeader',
    //             alignment: 'center'
    //         },
    //             {text: '1', style: 'tableHeader', alignment: 'center'},
    //             data[i].full_name, 'a'];
    //         bodyData[i + 1] = item;
    //     }
    //     return bodyData;
    // }

    printListUserInchedule(data, schedule) {
        console.log(data, 'ádasdasdas');

        let fm = {
            content: [
                {
                    alignment: 'center',
                    style: 'header',
                    columns: [

                        {
                            text: ['Ð?I H?C QU?C GIA HÀ N?I\n',
                                {text: 'TRU?NG Ð?I H?C CÔNG NGH? ', bold: true}]
                        },
                        {
                            text: ['C?NG HÒA XÃ H?I CH? NGHIA VI?T NAM\n',
                                {text: 'Ð?c l?p - T? do - H?nh phúc', bold: true}]
                        }
                    ]
                },
                '\n',
                {
                    alignment: 'center', bold: true, fontSize: 16,
                    text: 'DANH SÁCH D? THI',
                },
                '\n',
                {
                    margin: [20, 0, 0, 5],
                    columns: [
                        {
                            width: 350,
                            text: 'MÔN THI:' + schedule.subject+ '\n'
                        },
                        {
                            text: 'NGÀY THI: ' + schedule.day
                        }
                    ]
                },

                {
                    text: 'PHÒNG THI S?: '+schedule.room, margin: [20, 2, 0, 4],
                },

                {
                    margin: [15, 10, 0, 0],
                    style: 'tableExample',
                    table: {
                        widths: [25, 55, 25, 150, '*'],
                        body: data
                    }
                },

                {
                    margin: [-3, 25, 0, 0],
                    alignment: 'center',
                    columns: [
                        {
                            bold: true,
                            text: [
                                'Gi?ng viên coi thi\n',
                                {
                                    italics: true, bold: false,
                                    text: '(Ký và ghi rõ h? tên)'
                                }]
                        },
                        {
                            text: ['Hà N?i, ngày ..... tháng ..... nam 2019\n',
                                {
                                    text:
                                        '(Ch? ký sinh viên)', italics: true
                                },
                            ]
                        }
                    ]
                }
            ],
            styles: {
                header: {
                    fontSize: 13,
                    margin: [0, 0, 0, 10]
                },

                tableExample: {
                    margin: [20, 0, 0, 0]
                },

            }
        };
        pdfMake.createPdf(fm).open();
    }
}
