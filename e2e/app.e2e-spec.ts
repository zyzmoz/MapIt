import { MapItPage } from './app.po';

describe('map-it App', () => {
  let page: MapItPage;

  beforeEach(() => {
    page = new MapItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
