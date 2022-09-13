/// <reference types="cypress" />

describe('Delete player', () => {
    it('user should be able to delete his player', () => {
        cy.get("[data-cy='login']").click()
        cy.wait(1000)
        cy.get("[href='/profile']").contains("Perfil").click()
        cy.wait(1000)
        cy.scrollTo("top")
        cy.contains("creditu").should("be.visible")
        cy.wait(1000)
        cy.contains("BORRAR PLAYER").click({force: true})
        cy.get(".swal2-confirm").click()
        cy.get(".swal2-confirm").click()
    })
})