/// <reference types="cypress" />
describe('Authentication', () => {
	it('Successsfully Authentication', () => {
		cy.LoginViaAPI()
		cy.contains('h2', 'Models').should('be.visible')
	})
})
