import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentInfosComponent } from './create-student-infos.component';

describe('CreateStudentInfosComponent', () => {
  let component: CreateStudentInfosComponent;
  let fixture: ComponentFixture<CreateStudentInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStudentInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
