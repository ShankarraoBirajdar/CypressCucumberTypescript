/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
let entitementJson = require('../../../fixtures/Entitlements.json');
// import * as objectRepoJson from '../fixtures/ObjectRepo.json';
// import * as fieldMappingJson from '../fixtures/fieldMapping.json';
require('cypress-xpath');
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { GenericFunctions } from "../../../support/GenericFunctions";

Given('I Visit to QA Tools Application', function () {
    let url = Cypress.env('qa_url');
    GenericFunctions.openUrl(url);

});

When('I Login to QA Tools Application', function () {
    let url = Cypress.env('qa_url');
    url = url + 'login';
    GenericFunctions.openUrl(url);
    let value = (entitementJson['qa'])['username'];
    let locator = GenericFunctions.getLocator('txtUsername','loginScreen');
    GenericFunctions.textboxOperation(value,locator);
    value = (entitementJson['qa'])['password'];
    locator = GenericFunctions.getLocator('txtPassword','loginScreen');
    GenericFunctions.textboxOperation(value,locator);
    locator = GenericFunctions.getLocator('btnLogin','loginScreen');
    GenericFunctions.clickOpertion(locator);
});


When('I enter {string} in {string} of {string}', function (value: string, fieldName: string, screenName: string) {
    let locator = GenericFunctions.getLocator(fieldName,screenName);
    GenericFunctions.textboxOperation(value,locator);
});

When('I click the {string} of {string}', function (fieldName: string, screenName: string) {
    let locator = GenericFunctions.getLocator(fieldName,screenName);
    GenericFunctions.clickOpertion(locator);
});

When('I click the {string} of {string} with replace value {string}', function (fieldName: string, screenName: string, replaceValue: string) {
    let locator = GenericFunctions.getReplacedLocator(fieldName,screenName,replaceValue);
    GenericFunctions.clickOpertion(locator);
});

When('I select the radiobutton {string} of {string} with replace value {string}', function (fieldName: string, screenName: string, replaceValue: string) {
    let locator = GenericFunctions.getReplacedLocator(fieldName,screenName,replaceValue);
    GenericFunctions.radioButtonOpertion(locator,replaceValue);
});

When('I select the checkbox {string} of {string} with replace value {string}', function (fieldName: string, screenName: string, replaceValue: string) {
    let locator = GenericFunctions.getReplacedLocator(fieldName,screenName,replaceValue);
    GenericFunctions.radioButtonOpertion(locator,replaceValue);
});



