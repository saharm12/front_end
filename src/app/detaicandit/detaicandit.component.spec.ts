import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaicanditComponent } from './detaicandit.component';

describe('DetaicanditComponent', () => {
  let component: DetaicanditComponent;
  let fixture: ComponentFixture<DetaicanditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaicanditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaicanditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
