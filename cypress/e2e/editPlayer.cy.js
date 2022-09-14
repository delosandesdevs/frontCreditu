/// <reference types="cypress" />

describe('editPlayer', () => {
    it('User can modify his player', () => {
        cy.get("[data-cy='login']").click()
        cy.wait(1000)
        cy.get("[href='/profile']").contains("Perfil").click()
        cy.wait(1000)
        cy.contains("Edita tu player").click({force: true})
        cy.get("[type='text']").clear({force: true})
        cy.get("[type='text']").type("creditu", { force: true })
        cy.get("[type='number']").clear({force: true})
        cy.get("[type='number']").type("3500", { force: true })
        cy.get(".create-player-submit").click()
        cy.get(".swal2-confirm").click()
    })
})