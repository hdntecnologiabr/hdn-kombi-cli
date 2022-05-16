const { When, Then } = require('cypress-cucumber-preprocessor/steps');

import CommonPage from '../page_objects/Common.page';
import ExamplePage from '../page_objects/Example.page';

When(/^I do something$/, () => {
  CommonPage.doSomething();
});

Then(/^I see something$/, () => {
  ExamplePage.exampleCheck();
});