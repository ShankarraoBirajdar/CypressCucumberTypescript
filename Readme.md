

mkdir CypressTypeScript

cd CypressTypeScript/

npm init -y

npm install cypress typescript

npx tsc --init --types cypress --lib dom,es6

echo {} > cypress.json




    it('Should perform basic google search', () => {
      //expect(true).to.equal(true)
      cy.visit('https://google.com/')
      cy.get('[name="q"]')
      .type('subscribe')
      .type('{enter}');
    })

    it('Verify Title of The Page-Negative', () => {
        //expect(true).to.equal(true)
        cy.visit('http://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce store')
      })

package.json> 

"cypress:open": "cypress open",

"cypress:run": "cypress run"

      npm run cy:open
      npm run cy:run
