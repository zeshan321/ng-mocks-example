import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TimestampViewerComponent} from './timestamp-viewer.component';
import {TimestampViewerChildComponent} from "../timestamp-viewer-child/timestamp-viewer-child.component";

describe('TimestampViewerComponent', () => {
  let component: TimestampViewerComponent;
  let fixture: ComponentFixture<TimestampViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimestampViewerComponent, ChildStubComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.timestampViewerChildComponent = TestBed.createComponent<TimestampViewerChildComponent>(ChildStubComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateTimeStamp', () => {
    spyOn(component.timestampViewerChildComponent, 'updateTimestamp');
    component.update();
    expect(component.timestampViewerChildComponent?.updateTimestamp).toHaveBeenCalled();
  })
});


import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timestamp-viewer-child',
  template: ''
})
export class ChildStubComponent implements OnInit {

  timestamp: Date | null = null;

  ngOnInit(): void {
  }

  updateTimestamp(): void {

  }
}
