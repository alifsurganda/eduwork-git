describe('Validate Content', () => {
	it('Verify the list users will displayed', () => {
		var user = {
			name: 'limber',
		}
		cy.request({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/ability/7/',
		})
		cy.request('GET', 'https://pokeapi.co/api/v2/ability/7/', user).then(
			(response) => {
				expect(response.body.name).to.eq('limber')
			}
		)
	})
})
