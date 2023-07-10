// const { animal } = require('faker')

// Cypress.Commands.add(
// 	'loginViaGui',
// 	(user = Cypress.env('user'), password = Cypress.env('password')) => {
// 		cy.visit('/')
// 		cy.get('#userEmail').type(user)
// 		cy.get('#userPassword').type(password, { log: false })
// 		cy.contains('button', 'Login').click()
// 	}
// )

Cypress.Commands.add(
	'LoginViaAPI',
	(
		email = Cypress.env('userEmail'),
		password = Cypress.env('userPassword'),
		url = Cypress.env('apiUrl')
	) => {
		cy.request('POST', `${url}/users/login`, {
			username: email,
			password,
		}).then((response) => {
			cy.setCookie('sessionId', response.body.sessionId)
			cy.setCookie('userId', response.body.userId)
			cy.visit(`${url}/#!/main`)
		})
	}
)
