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

    printRegister(data) {
        let user: any = JSON.parse(localStorage.getItem('user'));
        let fm = {
                content: [
                    {
                        alignment: 'center',
                        style: 'header',
                        columns: [

                            {
                                text: ['ĐẠI HỌC QUỐC GIA HÀ NỘI\n',
                                    {text: 'TRƯỜNG ĐẠI HỌC CÔNG NGHỆ ', bold: true}]
                            },
                            {
                                text: ['CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\n',
                                    {text: 'Độc lập - Tự do - Hạnh phúc', bold: true}]
                            }
                        ]
                    },
                    '\n',
                    {
                        alignment: 'center', bold: true, fontSize: 16,
                        text: 'PHIẾU DỰ THI KÌ THI '+data.schedule.exam ,
                    },
                    '\n',
                    {
                        margin: [20, 0, 0, 4],
                        columns: [
                            {
                                width: 350,
                                text: 'Họ tên thí sinh:' + user.full_name + ' \n'
                            },

                        ]
                    },

                    {
                        margin: [20, 0, 0, 4],
                        text: 'MSSV:' + user.username
                    },
                    {
                        text: 'Môn học: ' + data.schedule.subject, margin: [20, 0, 0, 4],
                    },

                    {
                        margin: [23, 0, 0, 5],

                        text: 'Mã môn học: MAT12345'
                    },


                    {
                        margin: [2, 10, 0, 0],
                        style: 'tableExample',
                        table: {
                            widths: [25, '*', '*', '*', '*'],
                            body: [
                                ['STT', 'Ngày thi', 'Phòng thi', 'Thời gian thi', 'Chỗ ngồi'],
                                ['1', data.schedule.day, data.schedule.room, data.schedule.start_time + '-' + data.schedule.end_time, data.seat]
                            ]
                        }
                    },

                    {
                        margin: [-3, 25, 0, 0],
                        alignment: 'center',
                        columns: [
                            {
                                bold: true,
                                text: [
                                    'Giảng viên coi thi\n',
                                    {
                                        italics: true, bold: false,
                                        text: '(Ký và ghi rõ họ tên)'
                                    }]
                            },
                            {
                                text: ['Hà Nội, ngày ..... tháng ..... nam 2019\n',
                                    {
                                        text:
                                            '(Chữ ký sinh viên)', italics: true
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
                        alignment: 'center',
                        margin: [20, 0, 0, 0]
                    },

                }
            }
        ;
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
                            text: ['ĐẠI HỌC QUỐC GIA HÀ NỘI\n',
                                {text: 'TRƯỜNG ĐẠI HỌC CÔNG NGHỆ ', bold: true}]
                        },
                        {
                            text: ['CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\n',
                                {text: 'Độc lập - Tự do - Hạnh phúc', bold: true}]
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
                            text: 'MÔN THI:' + schedule.subject + '\n'
                        },
                        {
                            text: 'NGÀY THI: ' + schedule.day
                        }
                    ]
                },

                {
                    text: 'PHÒNG THI SỐ: ' + schedule.room, margin: [20, 2, 0, 4],
                },
                {
                    margin: [20, 0, 0, 5],
                    columns: [
                        {
                            width: 300,
                            text: 'Thời gian bắt đầu: ' + schedule.start_time + '\n'
                        },
                        {
                            text: 'Thời gian kết thúc: ' + schedule.end_time + '\n'
                        }
                    ]
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
                                    text: '(Ký và ghi rõ họ tên)'
                                }]
                        },
                        {
                            text: ['Hà Nội, ngày ..... tháng ..... nam 2019\n',
                                {
                                    text:
                                        '(Chữ ký sinh viên)', italics: true
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
