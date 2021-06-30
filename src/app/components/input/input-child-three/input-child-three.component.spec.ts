import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChildThreeComponent } from './input-child-three.component';

describe('InputChildThreeComponent', () => {
  let component: InputChildThreeComponent;
  let fixture: ComponentFixture<InputChildThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputChildThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputChildThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
