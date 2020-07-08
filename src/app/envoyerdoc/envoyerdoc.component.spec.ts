import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerdocComponent } from './envoyerdoc.component';

describe('EnvoyerdocComponent', () => {
  let component: EnvoyerdocComponent;
  let fixture: ComponentFixture<EnvoyerdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoyerdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyerdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
