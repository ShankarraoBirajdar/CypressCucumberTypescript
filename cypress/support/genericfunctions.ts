/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
let objectRepoJson = require('../fixtures/ObjectRepo.json');
let fieldMappingJson = require('../fixtures/fieldMapping.json');
let entitementJson = require('../fixtures/Entitlements.json');
// import * as objectRepoJson from '../fixtures/ObjectRepo.json';
// import * as fieldMappingJson from '../fixtures/fieldMapping.json';
import './index';
import './commands';
require('cypress-xpath');

export class GenericFunctions {

    static openUrl(url: string) {
        GenericFunctions.wait(3000);
        cy.visit(url);
        GenericFunctions.wait(3000);
    }

    static textboxOperation(value: string,locator: string) {
        GenericFunctions.wait(3000);
        cy.xpath(locator).scrollIntoView().clear({ force: true }).type(value, { force: true });
        GenericFunctions.wait(3000);
    }

    static clickOpertion(locator: string) {
        cy.xpath(locator).scrollIntoView().click({ force: true });
        GenericFunctions.wait(3000);
    }

    static wait(noInMiliSec: number){
        cy.wait(noInMiliSec);
    }

    static getLocator(fieldName: string, screenName: string) {
        let locator = (fieldMappingJson.hasOwnProperty(fieldName)) ? (objectRepoJson[screenName])[fieldMappingJson[fieldName]] : (objectRepoJson[screenName])[fieldName];
        locator = locator.toString();
        cy.log("Locator:: " + locator);
        return locator;
        // let locator = (fieldMappingJson.hasOwnProperty('commonLocator')) ? (objectRepoJson['commonLocator'])[fieldMappingJson[fieldName]] : (objectRepoJson[screenName])[fieldName];
        //    cy.log(objectRepoJson.loginScreen.txtUsername);
        // let locator = objectRepoJson.loginScreen.txtUsername;
    }
    static getReplacedLocator(fieldName: string, screenName: string, replaceValue: string) {
        let locator = (fieldMappingJson.hasOwnProperty(fieldName)) ? (objectRepoJson[screenName])[fieldMappingJson[fieldName]] : (objectRepoJson[screenName])[fieldName];
        locator = locator.toString();
        locator = locator.replace("<option>",replaceValue);
        cy.log("Locator:: " + locator);
        return locator;
    }
    static radioButtonOpertion(locator: string, value: string) {
        cy.xpath(locator).check({ force: true }).should('be.checked').should('have.value',value);

    }
    static checkboxOpertion(locator: string, value: string) {
        cy.xpath(locator).check({ force: true }).should('be.checked').should('have.value',value);
    }
    static staticDropdownOpertion() {

    }
    static linkOpertion() {

    }
    static dateOpertion() {

    }

    static alert(){
        cy.on('windows:alert',(str)=>
        {
            expect(str).to.equal('text');
        });

        cy.on('windows:confirm',(str)=>
        {
            expect(str).to.equal('text');
        });
    }

    static go(){
        cy.go('back'); cy.go(-1);
        cy.go('forward');cy.go(1);

        cy.url().should('include','text');
        cy.title().should('include','text');
    }


}