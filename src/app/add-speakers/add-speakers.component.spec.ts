import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpeakersComponent } from './add-speakers.component';

describe('AddSpeakersComponent', () => {
  let component: AddSpeakersComponent;
  let fixture: ComponentFixture<AddSpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
