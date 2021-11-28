import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimestampViewerComponent } from './timestamp-viewer/timestamp-viewer.component';
import { TimestampViewerChildComponent } from './timestamp-viewer-child/timestamp-viewer-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TimestampViewerComponent,
    TimestampViewerChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
