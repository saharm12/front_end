import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaureatComponent } from './laureat.component';

describe('LaureatComponent', () => {
  let component: LaureatComponent;
  let fixture: ComponentFixture<LaureatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaureatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaureatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
