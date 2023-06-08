/// <reference types="cypress" />

describe('Working with input', () => {
  it("Visit the website", () => {
    cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    //cy.url().should('include', 'pay-bills.html')
    
    /* cy.get('#user_login').clear()
     cy.get('#user_login').type('username')
   
     cy.get('input[name="user_password"]').clear()
     cy.get('input[name="user_password"]').type('password')
     
     cy.get('#user_remember_me').should('have.prop', 'checked')
     */
   
    cy.fixture('user').then(user => {
      const username = user.username
      const password = user.password
      const amount = user.amount
      const date = user.date
      const description = user.description
       
      cy.tugas55(username, password)  // 5. ========> nama custom commands nya ikutin yang ada di file commands.js ==> misal 'login' tadi
          
      cy.get('#pay_bills_tab').click()
      cy.get('h2').should('contain.text', 'Make payments to your saves payees')
          
          
      cy.tugas5(amount, date, description)  // 6. ========> nama custom commands nya ikutin yang ada di file commands.js ==> misal 'paybills' tadi
      

      /*cy.get('#user_login').clear()
      cy.get('#user_login').type(username)
      
      cy.get('input[name="user_password"]').clear()
      cy.get('input[name="user_password"]').type(password)*/
    
      // cy.get('.btn-primary').click()
    
      // cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
    });
  });
});