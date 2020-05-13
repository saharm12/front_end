import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsExpoComponent } from './details-expo.component';

describe('DetailsExpoComponent', () => {
  let component: DetailsExpoComponent;
  let fixture: ComponentFixture<DetailsExpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsExpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsExpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
