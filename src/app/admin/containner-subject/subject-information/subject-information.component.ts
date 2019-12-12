import {Component, Input, OnInit} from '@angular/core';
import {Subject} from '../../../interface/subject';

@Component({
    selector: 'app-subject-information',
    templateUrl: './subject-information.component.html',
    styleUrls: ['./subject-information.component.css']
})
export class SubjectInformationComponent implements OnInit {
    @Input() subject: Subject;

    constructor() {
        this.subject = {code: '', name: ''};

    }

    ngOnInit() {
    }

}
