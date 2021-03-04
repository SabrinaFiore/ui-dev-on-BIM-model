import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogleComponent } from './togle.component';

describe('TogleComponent', () => {
  let component: TogleComponent;
  let fixture: ComponentFixture<TogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
