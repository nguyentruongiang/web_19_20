import {Component, Input, OnInit} from '@angular/core';
import {Exam} from '../../../interface/exam';

@Component({
    selector: 'app-exam-information',
    templateUrl: './exam-information.component.html',
    styleUrls: ['./exam-information.component.css']
})
export class ExamInformationComponent implements OnInit {

    @Input() exam : Exam;
    label = 'Mỏ';

    constructor() {
        this.exam = {name: '', status: false};
    }

    ngOnInit() {
    }
}
