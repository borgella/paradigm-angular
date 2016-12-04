import { ParadigmAngularPage } from './app.po';

describe('paradigm-angular App', function() {
  let page: ParadigmAngularPage;

  beforeEach(() => {
    page = new ParadigmAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
