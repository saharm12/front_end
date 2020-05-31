import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprogComponent } from './editprog.component';

describe('EditprogComponent', () => {
  let component: EditprogComponent;
  let fixture: ComponentFixture<EditprogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
