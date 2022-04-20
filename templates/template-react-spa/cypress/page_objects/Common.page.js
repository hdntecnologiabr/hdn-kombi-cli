const doSomething = () => {
  // do something
};

const goToPage = (page) => {
  cy.visit(`/#${page}`);
};

const validateUrl = (url) => {
  cy.url().should('include', `/#${url}`);
};

const checkElementExists = (selector, shouldExist = true) => {
  cy.get(selector).should(shouldExist ? 'exist' : 'not.exist');
};

const checkElementExistsDataTest = (dataTest, shouldExist = true) => {
  checkElementExists(`[data-test="${dataTest}"]`, shouldExist);
};

const checkTooltipExists = (shouldExist = true) => {
  checkElementExists('[role="tooltip"]', shouldExist);
};

const checkElementVisible = (selector, shouldBeVisible = true) => {
  cy.get(selector).should(shouldBeVisible ? 'be.visible' : 'not.be.visible');
};

const checkElementVisibleDataTest = (dataTest, shouldBeVisible = true) => {
  checkElementVisible(`[data-test="${dataTest}"]`, shouldBeVisible);
};

const checkChartTooltipVisible = (shouldBeVisible = true) => {
  checkElementVisible('[data-test=chart-tooltip]', shouldBeVisible);
};

const checkElementText = (dataTest, elementText) => {
  cy.get(dataTest).should('have.text', elementText);
};

const checkElementTextDataTest = (dataTest, elementText) => {
  checkElementText(`[data-test="${dataTest}"]`, elementText);
};

const checkElementContains = (dataTest, content) => {
  cy.get(dataTest).should('contain', content);
};

const checkElementContainsDataTest = (dataTest, content) => {
  checkElementContains(`[data-test="${dataTest}"]`, content);
};

const checkTooltipText = (text) => {
  checkElementText('[role=tooltip]', text);
};

const checkButtonVisibleLabel = (label, shouldBeVisible = true) => {
  cy.contains(new RegExp(label, 'i')).should(shouldBeVisible ? 'be.visible' : 'not.be.visible');
};

const checkElementDisabled = (selector, shouldBeDisabled = true) => {
  cy.get(selector).should(shouldBeDisabled ? 'be.disabled' : 'not.be.disabled');
};

const checkElementDisabledDataTest = (dataTest, shouldBeDisabled = true) => {
  checkElementDisabled(`[data-test="${dataTest}"]`, shouldBeDisabled);
};

const checkPageTitle = (pageTitle) => {
  cy.get('h1').first().should('have.text', pageTitle);
};

const checkPageTitleNotExist = () => {
  cy.get('h1').should('not.exist');
};

const hoverTopLocationsTableTooltip = () => {
  cy.get(`[data-test="orders-location-table-title"]`).find('>svg').trigger('mouseover');
};

const click = (selector) => {
  cy.get(selector).first().click();
};

const clickLabel = (label) => {
  cy.contains(new RegExp(`^${label}$`, 'i')).click();
};

const clickLabelSelector = (selector, label) => {
  cy.get(selector)
    .contains(new RegExp(`^${label}$`, 'i'))
    .click();
};

const clickDataTest = (dataTest) => {
  click(`[data-test="${dataTest}"]`);
};

const mouseOver = (selector) => {
  cy.get(selector).first().trigger('mouseover');
};

const mouseOverDataTest = (dataTest) => {
  mouseOver(`[data-test="${dataTest}"]`);
};

const mouseOverClassName = (className) => {
  mouseOver(`.${className}`);
};

const mouseOverId = (id) => {
  mouseOver(`#${id}`);
};

const mouseOut = (selector) => {
  cy.get(selector).first().trigger('mouseout');
};

const mouseOutDataTest = (dataTest) => {
  mouseOut(`[data-test="${dataTest}"]`);
};

const mouseOutClassName = (className) => {
  mouseOut(`.${className}`);
};

const type = (selector, content) => {
  cy.get(selector).type(content);
};

const typeDataTest = (dataTest, content) => {
  type(`[data-test="${dataTest}"]`, content);
};

const checkInputsValueEqual = (inputSelector1, inputSelector2, shoulBeEqual = true) => {
  const compareOption = shoulBeEqual ? 'have.value' : 'not.have.value';

  cy.get(inputSelector1)
    .invoke('val')
    .then((inputValue1) => {
      cy.get(inputSelector2).should(compareOption, inputValue1);
    });
};

const checkInputsValueEqualDataTest = (dataTest1, dataTest2, shoulBeEqual = true) => {
  checkInputsValueEqual(`[data-test="${dataTest1}"]`, `[data-test="${dataTest2}"]`, shoulBeEqual);
};

const checkInputEmpty = (dataTest, shouldBeEmpty = true) => {
  cy.get(`[data-test="${dataTest}"]`)
    .invoke('val')
    .should(shouldBeEmpty ? 'be.ok' : 'not.be.empty');
};

const checkElementHasAttribute = (selector, attribute) => {
  cy.get(selector).should('have.attr', attribute);
};

const checkElementBackgroundColor = (selector, color) => {
  cy.get(selector).should('have.css', 'background-color', color);
};

const checkElementBackgroundColorDataTest = (dataTest, color) => {
  checkElementBackgroundColor(`[data-test="${dataTest}"]`, color);
};

const updateCurrentDate = (date) => {
  cy.clock(new Date(date), ['Date']);
};

const checkElementsCount = (selector, count) => {
  cy.get(selector).should('have.length', count);
};

const checkTableRowsCount = (tableSelector, rowsCount) => {
  cy.get(tableSelector).find('tbody tr').should('have.length', rowsCount);
};

const scrollTo = (scrollPosition) => {
  cy.window().scrollTo(scrollPosition);
};

const checkScrollPosition = (scrollPosition) => {
  cy.window().its('scrollY').should('equal', scrollPosition);
};

const checkCheckboxChecked = (selector, shouldBeChecked = true) => {
  cy.get(selector).should(shouldBeChecked ? 'be.checked' : 'not.be.checked');
};

const checkCheckboxCheckedDataTest = (dataTest, shouldBeChecked = true) => {
  checkCheckboxChecked(`[data-test="${dataTest}"]`, shouldBeChecked);
};

const checkCheckboxIndeterminate = (selector, shouldBeIndeterminate = true) => {
  cy.get(selector)
    .invoke('attr', 'data-indeterminate')
    .should('equal', String(shouldBeIndeterminate));
};

const checkCheckboxIndeterminateDataTest = (dataTest, shouldBeIndeterminate = true) => {
  checkCheckboxIndeterminate(`[data-test="${dataTest}"]`, shouldBeIndeterminate);
};

const checkLoadingIcon = (buttonName) => {
  cy.get(`[data-test="${buttonName}"] > span > span > div > svg > circle`).should('be.visible');
};

const CommonPage = {
  doSomething,
  goToPage,
  validateUrl,
  checkElementExists,
  checkElementExistsDataTest,
  checkTooltipExists,
  checkElementVisible,
  checkElementVisibleDataTest,
  checkChartTooltipVisible,
  checkButtonVisibleLabel,
  checkElementDisabled,
  checkElementDisabledDataTest,
  checkElementText,
  checkElementTextDataTest,
  checkTooltipText,
  checkPageTitle,
  checkPageTitleNotExist,
  checkElementContains,
  checkElementContainsDataTest,
  hoverTopLocationsTableTooltip,
  click,
  clickDataTest,
  clickLabel,
  clickLabelSelector,
  mouseOver,
  mouseOverDataTest,
  mouseOverClassName,
  mouseOverId,
  mouseOut,
  mouseOutDataTest,
  mouseOutClassName,
  type,
  typeDataTest,
  checkInputsValueEqual,
  checkInputsValueEqualDataTest,
  checkInputEmpty,
  checkElementHasAttribute,
  checkElementBackgroundColor,
  checkElementBackgroundColorDataTest,
  updateCurrentDate,
  checkElementsCount,
  checkTableRowsCount,
  scrollTo,
  checkScrollPosition,
  checkCheckboxChecked,
  checkCheckboxCheckedDataTest,
  checkCheckboxIndeterminate,
  checkCheckboxIndeterminateDataTest,
  checkLoadingIcon,
};

export default CommonPage;
