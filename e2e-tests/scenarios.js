'use strict';


describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /login when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/login");
  });

  describe('login', function() {

    beforeEach(function() {
      browser.get('index.html#/login');
    });


    it('should render view1 when user navigates to /view1', function() {
        expect(element.all(by.name('loginForm')).count()).toEqual(1);
    });

  });


});
