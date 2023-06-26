const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I enter the word online', () => {
	cy.visit('http://zero.webappsecurity.com/index.html')
	cy.get('#searchTerm').type('online {enter}')
})

When('I click enter', () => {
	cy.get('#searchTerm').type('some text {enter}')
})

Then('I should see homepage', () => {
	cy.get('h2').should('contain.text', 'Search Results:')
})
