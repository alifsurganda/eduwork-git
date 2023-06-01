/// <reference types="cypress" />

describe('My First Test', () => {
  it('clicking "type" show the right headings', () => {
    cy.visit('https://example.cypress.io')

  //cy.pause()//

    cy.contains('type').click()
    
    cy.url().should('include','/commands/actions')

    cy.get('.action-email')
      .type('pribadiyuyun947@gmail.com')
      .should('have.value','pribadiyuyun947@gmail.com')
  })
})
  