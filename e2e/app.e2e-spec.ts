import { Angular2FormsPage } from './app.po';

describe('angular2-forms App', () => {
  let page: Angular2FormsPage;

  beforeEach(() => {
    page = new Angular2FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
