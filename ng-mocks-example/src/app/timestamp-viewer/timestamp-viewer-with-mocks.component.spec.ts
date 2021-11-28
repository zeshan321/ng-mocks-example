import {MockBuilder, MockInstance, MockRender, ngMocks} from "ng-mocks";
import {TimestampViewerComponent} from "./timestamp-viewer.component";
import {TimestampViewerChildComponent} from "../timestamp-viewer-child/timestamp-viewer-child.component";
import {AppModule} from "../app.module";

describe('TimestampViewerComponent', () => {
  ngMocks.faster();

  beforeAll(() => {
    return MockBuilder(TimestampViewerComponent, AppModule);
  });

  it('should create', () => {
    const fixture = MockRender(TimestampViewerComponent);
    expect(fixture).toBeDefined();
  });

  it('should call updateTimestamp', () => {
    const spyUpdateTimestamp = MockInstance(TimestampViewerChildComponent, 'updateTimestamp', jasmine.createSpy());
    const {point} = MockRender(TimestampViewerComponent, null);

    point.componentInstance.update();

    expect(spyUpdateTimestamp).toHaveBeenCalled();
  });
});
