import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReadStudentInfosComponent } from './read-student-infos/read-student-infos.component';
import { Student } from './student';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  url:any = "http://localhost:4200/assets/studentInfos.json";
  constructor(private http : Http) { 


  }

 
// private extractData(res: Response) {
//   let body = res.json();
//   return body;
// } 
public getStudentsObservable(): Observable<Student[]>{
  return this.http
  .get(this.url)
  .pipe(map((res: Response) => res.json() ));//return res.json()
 }
private handleErrorObservable (error: Response | any) {
  console.error(error.message || error);
  return Observable.throw(error.message || error);
}

private extractData(res: Response) {
  let body = res.json();
  return body.features || { };
}


//Client side*(Web Browser) tarafindan server daki  dosyaya yazma yapamiyoruz. 
/***
 * 
 * I replied to your question in the discussion Tab for this course. Here was my answer:

You cannot add, update, or delete rows from the product.json file using http.
 Only the get works.

To add, update, and delete data with http,
 you need a back-end server.
  There is an in memory back-end server 
  you can use to try out the add, update,
   and delete without having to actually 
   set up a back-end server.
 */
public createNewStudentRecord(student:Student):void{
  console.log("StudentServiceService  ------->>>>> createNewStudentRecord ......");
  console.log(student.id);
  console.log(student.first_name);
  console.log(student.last_name);

}

}
