/// <reference types="cypress" />

describe('User should can logout', () => {
    it('logout', () => {
        cy.get("[data-cy='login']").click()
        cy.contains('Salir').click()
    })
})