import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student';

@Component({
  selector: 'app-create-student-infos',
  templateUrl: './create-student-infos.component.html',
  styleUrls: ['./create-student-infos.component.css']
})
export class CreateStudentInfosComponent implements OnInit {
 // private studentRecord:Student;
  @Output() pageChangeEvent = new EventEmitter<string>();
  destComponentDesc:string; 
  constructor(private _studentService:StudentServiceService) { 

  }

  ngOnInit() {
  }
  
  viewReadPage(){ 
    console.log("viewReadPage method... app-create-student-infos.component : destination => read");
    this.destComponentDesc = "read";
    this.pageChangeEvent.emit(this.destComponentDesc);

  }
  createStudent(studentInfoForm: NgForm){ 
    console.log("********************createStudent**************************");
    console.log(studentInfoForm.value.studentID);
    console.log(studentInfoForm.value.studentFirstName);
    console.log(studentInfoForm.value.studentLastNames);
    console.log("***********************************************************");

    let _studentRecord:Student;
    _studentRecord.id = studentInfoForm.value.studentID;
    _studentRecord.first_name = studentInfoForm.value.studentFirstName;
    _studentRecord.last_name = studentInfoForm.value.studentLastName;
    this._studentService.createNewStudentRecord(_studentRecord);

  }
}
