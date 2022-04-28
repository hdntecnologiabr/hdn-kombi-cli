const { Given } = require('cypress-cucumber-preprocessor/steps');

import Permissions from '../page_objects/Permissions.page';

Given(/^I have permission$/, () => {
  Permissions.setTokenWithScope('CustomerPortal.DB.Read');
});

Given(/^I don't have permission$/, () => {
  Permissions.setTokenWithScope('CustomerPortal.DB.Wrong.Read');
});
