import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditjuryComponent } from './editjury.component';

describe('EditjuryComponent', () => {
  let component: EditjuryComponent;
  let fixture: ComponentFixture<EditjuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditjuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditjuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
