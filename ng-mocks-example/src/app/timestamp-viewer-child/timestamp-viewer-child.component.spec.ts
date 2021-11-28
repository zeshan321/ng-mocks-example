import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampViewerChildComponent } from './timestamp-viewer-child.component';

describe('TimestampViewerChildComponent', () => {
  let component: TimestampViewerChildComponent;
  let fixture: ComponentFixture<TimestampViewerChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimestampViewerChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampViewerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
