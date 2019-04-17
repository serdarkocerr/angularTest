import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-deneme';
  read_student_html_status:boolean ;
  create_student_html_status:boolean ;
  currentViewPageDesc:string;
  constructor() { 
    this.read_student_html_status = true;
    this.create_student_html_status = false;
  }
  toCreatePage(){
    this.read_student_html_status = false;
    this.create_student_html_status = true;
  }
  toReadPage(){
    this.read_student_html_status = true;
    this.create_student_html_status = false;
  }

  changePage($event){
    this.currentViewPageDesc = $event;
    if( this.currentViewPageDesc == "create"){
      console.log("To Create Page ......");
      this.toCreatePage();
    }else if( this.currentViewPageDesc == "read"){
      this.toReadPage();
      console.log("To Read Page ......");
    }else{
      console.log("Wrong Event to Change PAGE!!!!!");
    }
  }
}
