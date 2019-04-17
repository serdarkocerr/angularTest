import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadStudentInfosComponent } from './read-student-infos/read-student-infos.component';
import { HttpModule} from '@angular/http';
import { CreateStudentInfosComponent } from './create-student-infos/create-student-infos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReadStudentInfosComponent,
    CreateStudentInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
