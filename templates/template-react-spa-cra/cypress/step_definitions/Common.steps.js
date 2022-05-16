const { Before, Given, Then, When } = require('cypress-cucumber-preprocessor/steps');
const startServer = require('../../app/server/');
import CommonPage from '../page_objects/Common.page';

import {
  tabs,
  pages,
  pagination,
  buttons,
  elements,
  tooltips,
  charts,
  inputs,
  modals,
  checkboxes,
} from '../utils/dictionary';

Before(() => {
  startServer().logging = true;
});

Given(/^I am on the "([^\"]+)" page$/, (pageName) => {
  CommonPage.goToPage(pages[pageName]);
  cy.wait(500);
});

Given(/^the date is "([^\"]+)"$/, (date) => {
  CommonPage.updateCurrentDate(date);
});

Given(/^the environment is "([^\"]+)"$/, (environment) => {
  cy.setEnvConfig('customer-portal-config', `{"ENV":"${environment}"}`);
});

When(/^I scroll to the "([^\"]+)" of the page$/, (scrollPosition) => {
  CommonPage.scrollTo(scrollPosition);
});

When(/^I hover over the "([^\"]+)" tooltip$/, (tooltipName) => {
  CommonPage.mouseOver(tooltips[tooltipName]);
});

When(/^I hover over the "([^\"]+)" chart$/, (chartName) => {
  cy.wait(500);
  CommonPage.mouseOver(charts[chartName]);
});

When(/^I click on the "([^\"]+)" element$/, (elementName) => {
  CommonPage.click(elements[elementName]);
});

When(/^I click on the "([^\"]+)" button$/, (buttonName) => {
  CommonPage.clickDataTest(buttons[buttonName]);
});

When(/^I click on the "([^\"]+)" pagination$/, (paginationName) => {
  CommonPage.click(pagination[paginationName]);
});

When(/^I click on the "([^\"]+)" tab$/, (tabName) => {
  CommonPage.click(tabs[tabName]);
  cy.wait(500);
});

When(/^I type "([^\"]+)" into the "([^\"]+)" input$/, (content, inputName) => {
  CommonPage.typeDataTest(inputs[inputName], content);
});

Then(
  /^I see the "([^\"]+)" input value equals to "([^\"]+)" input value$/,
  (inputName1, inputName2) => {
    CommonPage.checkInputsValueEqualDataTest(inputs[inputName1], inputs[inputName2]);
  }
);

Then(/^I see the "([^\"]+)" pagination active$/, (paginationName) => {
  CommonPage.checkElementHasAttribute(pagination[paginationName], 'aria-current');
});

Then(/^I see the "([^\"]+)" modal$/, (modalName) => {
  modals[modalName].forEach((element) => CommonPage.checkElementExistsDataTest(element));
});

Then(/^I don't see the "([^\"]+)" modal$/, (modalName) => {
  modals[modalName].forEach((element) => CommonPage.checkElementExistsDataTest(element, false));
});

Then(/^I see the "([^\"]+)" input empty$/, (inputName) => {
  CommonPage.checkInputEmpty(inputs[inputName]);
});

Then(/^I see the "([^\"]+)" input not empty$/, (inputName) => {
  CommonPage.checkInputEmpty(inputs[inputName], false);
});

Then(/^I see the "([^\"]+)" button disabled$/, (buttonName) => {
  CommonPage.checkElementDisabledDataTest(buttons[buttonName]);
});

Then(/^I see the "([^\"]+)" button not disabled$/, (buttonName) => {
  CommonPage.checkElementDisabledDataTest(buttons[buttonName], false);
});

Then(/^the page title must be "([^\"]+)"$/, (title) => {
  CommonPage.checkPageTitle(title);
});

Then(/^the page title must not exist$/, () => {
  CommonPage.checkPageTitleNotExist();
});

Then(/^I see a tooltip with "([^\"]+)" text$/, (tooltipDescription) => {
  CommonPage.checkTooltipExists();
  CommonPage.checkTooltipText(tooltipDescription);
});

Then(/^I see a tooltip$/, () => {
  CommonPage.checkTooltipExists();
});

Then(/^I see a chart tooltip$/, () => {
  CommonPage.checkChartTooltipVisible();
});

Then(/^I am redirected to the "([^\"]+)" page$/, (pageName) => {
  cy.wait(500);
  CommonPage.validateUrl(pages[pageName]);
});

Then(/^I see the "([^\"]+)" button$/, (buttonName) => {
  CommonPage.checkElementExistsDataTest(buttons[buttonName]);
});

Then(/^I see the "([^\"]+)" element$/, (elementName) => {
  CommonPage.checkElementExists(elements[elementName]);
});

Then(/^the scroll level is at the top$/, (buttonName) => {
  CommonPage.checkScrollPosition(0);
});

Then(/^I see "([^\"]+)" items on the "([^\"]+)" chart$/, (count, chartName) => {
  CommonPage.checkElementsCount(`${charts[chartName]}`, Number(count));
});

Then(/^I see the "([^\"]+)" checkbox checked$/, (checkboxName) => {
  CommonPage.checkCheckboxChecked(`${checkboxes[checkboxName]}`);
});

Then(/^I see the "([^\"]+)" checkbox indeterminate$/, (checkboxName) => {
  CommonPage.checkCheckboxIndeterminate(`${checkboxes[checkboxName]}`);
});

Then(/^I see the loading state icon on "([^\"]+)" button$/, (buttonName) => {
  CommonPage.checkLoadingIcon(buttons[buttonName]);
});
