import { HelloWorldPage } from './app.po';

describe('xyzzy App', () => {
  let page: HelloWorldPage;

  beforeEach(() => {
    page = new HelloWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
