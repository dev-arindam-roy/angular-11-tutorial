import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChildTwoComponent } from './nested-child-two.component';

describe('NestedChildTwoComponent', () => {
  let component: NestedChildTwoComponent;
  let fixture: ComponentFixture<NestedChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
