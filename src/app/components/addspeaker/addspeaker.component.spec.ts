import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspeakerComponent } from './addspeaker.component';

describe('AddspeakerComponent', () => {
  let component: AddspeakerComponent;
  let fixture: ComponentFixture<AddspeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
