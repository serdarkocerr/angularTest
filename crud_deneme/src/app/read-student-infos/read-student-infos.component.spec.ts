import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadStudentInfosComponent } from './read-student-infos.component';

describe('ReadStudentInfosComponent', () => {
  let component: ReadStudentInfosComponent;
  let fixture: ComponentFixture<ReadStudentInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadStudentInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadStudentInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
