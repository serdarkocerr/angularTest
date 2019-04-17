import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read-student-infos',
  templateUrl: './read-student-infos.component.html',
  styleUrls: ['./read-student-infos.component.css']
})
export class ReadStudentInfosComponent implements OnInit {
  students:Student[];
  destComponentDesc:string;
  @Output() pageChangeEvent = new EventEmitter<string>();

  constructor(private _studentService : StudentServiceService) { 

  }

  ngOnInit() {
    this._studentService.getStudentsObservable().subscribe(
      jsonData => {this.students=jsonData['students'];
                      console.log(jsonData);
                      console.log(this.students);
                   }
      //res.json()['data']//data verilerini getirir.
     // (jsonData)=>console.log(jsonData)
      );
  }

  viewCreatePage() {
    console.log("viewCreatePage method... read-student-infos.component : destination => create");
    this.destComponentDesc = "create";
    this.pageChangeEvent.emit(this.destComponentDesc);
  }
  
}
