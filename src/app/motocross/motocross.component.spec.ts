import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotocrossComponent } from './motocross.component';

describe('MotocrossComponent', () => {
  let component: MotocrossComponent;
  let fixture: ComponentFixture<MotocrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotocrossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotocrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
