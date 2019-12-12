import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-container-user-subject',
    templateUrl: './container-user-subject.component.html',
    styleUrls: ['./container-user-subject.component.css']
})
export class ContainerUserSubjectComponent implements OnInit {
    allow = true;
    deny = false;

    constructor() {
    }

    ngOnInit() {
    }

}
