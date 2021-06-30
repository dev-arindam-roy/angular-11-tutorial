import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNotesComponent } from './basic-notes.component';

describe('BasicNotesComponent', () => {
  let component: BasicNotesComponent;
  let fixture: ComponentFixture<BasicNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
