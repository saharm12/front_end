import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsposnsComponent } from './addsposns.component';

describe('AddsposnsComponent', () => {
  let component: AddsposnsComponent;
  let fixture: ComponentFixture<AddsposnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsposnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsposnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
