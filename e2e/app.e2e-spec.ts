import { NgYuyaohshimoPage } from './app.po';

describe('ng-yuyaohshimo App', () => {
  let page: NgYuyaohshimoPage;

  beforeEach(() => {
    page = new NgYuyaohshimoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
