import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprogComponent } from './detailprog.component';

describe('DetailprogComponent', () => {
  let component: DetailprogComponent;
  let fixture: ComponentFixture<DetailprogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailprogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
