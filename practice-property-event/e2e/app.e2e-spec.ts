import { PracticePropertyEventPage } from './app.po';

describe('practice-property-event App', () => {
  let page: PracticePropertyEventPage;

  beforeEach(() => {
    page = new PracticePropertyEventPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
