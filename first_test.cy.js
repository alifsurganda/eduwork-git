/// <reference types="cypress" />

describe('My First Test', () => {
  it('clicking "type" show the right headings', () => {
    cy.visit('https://example.cypress.io')

    cy.pause()

    cy.contains('type').click()
    
    cy.url().should('iclude',)

    cy.get('.action-email')
      .type('...')
    .should('have.value',)
  })
  it('Visit the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').contains('C')
    cy.contains('get').click()
    cy.url().should('include', '/commands/querying')
  });
});