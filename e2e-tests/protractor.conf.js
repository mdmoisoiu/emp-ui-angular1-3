exports.config = {
  allScriptsTimeout: 11000,
  troubleshoot: false,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost/EmployeeDirectory/angular/app/index.html',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  framework: 'jasmine2',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
