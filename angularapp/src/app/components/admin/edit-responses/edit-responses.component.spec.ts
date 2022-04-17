import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResponsesComponent } from './edit-responses.component';

describe('EditResponsesComponent', () => {
  let component: EditResponsesComponent;
  let fixture: ComponentFixture<EditResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditResponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
