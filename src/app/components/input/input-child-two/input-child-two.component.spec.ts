import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChildTwoComponent } from './input-child-two.component';

describe('InputChildTwoComponent', () => {
  let component: InputChildTwoComponent;
  let fixture: ComponentFixture<InputChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
