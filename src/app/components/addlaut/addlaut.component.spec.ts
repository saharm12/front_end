import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlautComponent } from './addlaut.component';

describe('AddlautComponent', () => {
  let component: AddlautComponent;
  let fixture: ComponentFixture<AddlautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
