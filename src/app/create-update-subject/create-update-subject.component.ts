import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../interface/subject';

@Component({
  selector: 'app-create-update-subject',
  templateUrl: './create-update-subject.component.html',
  styleUrls: ['./create-update-subject.component.css']
})
export class CreateUpdateSubjectComponent implements OnInit {
  @Input() subject:Subject
  constructor() { }

  ngOnInit() {
  }

}
