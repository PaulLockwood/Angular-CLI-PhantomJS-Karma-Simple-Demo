import { XyzzyPage } from './app.po';

describe('xyzzy App', () => {
  let page: XyzzyPage;

  beforeEach(() => {
    page = new XyzzyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
