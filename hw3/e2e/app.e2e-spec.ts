import { Hw3Page } from './app.po';

describe('hw3 App', function() {
  let page: Hw3Page;

  beforeEach(() => {
    page = new Hw3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
