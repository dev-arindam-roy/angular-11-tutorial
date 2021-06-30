import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGaurdComponent } from './route-gaurd.component';

describe('RouteGaurdComponent', () => {
  let component: RouteGaurdComponent;
  let fixture: ComponentFixture<RouteGaurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteGaurdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteGaurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
