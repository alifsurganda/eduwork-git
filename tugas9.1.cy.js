describe('Validate Header', () => {
	it('Successfully validate content-type', () => {
		var user = {
			name: 'ditto',
		}

		cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', user).then(
			(response) => {
				expect(response.status).equal(200)
				expect(response.body).to.have.property('name', 'ditto')
			}
		)

		cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
		cy.get('@pokemon')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json; charset=utf-8')
	})
})
