import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotogpComponent } from './motogp.component';

describe('MotogpComponent', () => {
  let component: MotogpComponent;
  let fixture: ComponentFixture<MotogpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotogpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotogpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
