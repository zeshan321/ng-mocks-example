import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamp-viewer-child',
  templateUrl: './timestamp-viewer-child.component.html',
  styleUrls: ['./timestamp-viewer-child.component.scss']
})
export class TimestampViewerChildComponent implements OnInit {

  timestamp: Date | null = null;

  constructor() { }

  ngOnInit(): void {
    this.updateTimestamp();
  }

  updateTimestamp(): void {
    this.timestamp = new Date();
  }
}
