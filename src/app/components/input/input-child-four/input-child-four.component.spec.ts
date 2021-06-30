import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChildFourComponent } from './input-child-four.component';

describe('InputChildFourComponent', () => {
  let component: InputChildFourComponent;
  let fixture: ComponentFixture<InputChildFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputChildFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChildFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
