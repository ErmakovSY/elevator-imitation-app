import { ElevatorImitationAppPage } from './app.po';

describe('elevator-imitation-app App', function() {
  let page: ElevatorImitationAppPage;

  beforeEach(() => {
    page = new ElevatorImitationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
