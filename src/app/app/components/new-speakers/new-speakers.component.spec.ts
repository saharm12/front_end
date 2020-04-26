import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpeakersComponent } from './new-speakers.component';

describe('NewSpeakersComponent', () => {
  let component: NewSpeakersComponent;
  let fixture: ComponentFixture<NewSpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSpeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
