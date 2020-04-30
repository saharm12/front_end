import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlaureatComponent } from './addlaureat.component';

describe('AddlaureatComponent', () => {
  let component: AddlaureatComponent;
  let fixture: ComponentFixture<AddlaureatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlaureatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlaureatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
