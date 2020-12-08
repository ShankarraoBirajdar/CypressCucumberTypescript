/// <reference types="cypress" />
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps"
//import LoginPage from '../../pages/sauceLoginPage'
//const loginPage = new LoginPage()

Given('user is on SwagLab Login page', function ()  {
    cy.visit('https://www.saucedemo.com/')
});

When('user enter valid username password and click on Login button', function () {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    // loginPage.enterUsername('standard_user')
    // loginPage.enterPassword('secret_sauce')
    // loginPage.clickonLogintButton()

});

Then('user redirected to home page', function ()  {
    cy.get('.product_label').should('be.visible')
});