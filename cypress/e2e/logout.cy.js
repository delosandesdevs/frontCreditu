/// <reference types="cypress" />

describe('User should logout', () => {
    it('logout', () => {
        cy.get("[data-cy='login']").click()
        cy.contains('Salir').click()
    })
})