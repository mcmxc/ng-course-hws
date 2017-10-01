import { Lesson3Page } from './app.po';

describe('lesson3 App', function() {
  let page: Lesson3Page;

  beforeEach(() => {
    page = new Lesson3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
