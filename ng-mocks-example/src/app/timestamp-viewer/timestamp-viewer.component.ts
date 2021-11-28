import {Component, OnInit, ViewChild} from '@angular/core';
import {TimestampViewerChildComponent} from "../timestamp-viewer-child/timestamp-viewer-child.component";

@Component({
  selector: 'app-timestamp-viewer',
  templateUrl: './timestamp-viewer.component.html',
  styleUrls: ['./timestamp-viewer.component.scss']
})
export class TimestampViewerComponent implements OnInit {
  // @ts-ignore
  @ViewChild(TimestampViewerChildComponent) timestampViewerChildComponent: TimestampViewerChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  update() {
    this.timestampViewerChildComponent?.updateTimestamp();
  }
}
