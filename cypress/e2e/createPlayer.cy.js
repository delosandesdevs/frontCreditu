/// <reference types="cypress" />

describe('Create player', () => {
    it('should display "Todos los campos deben ser llenados, evita usar simbolos" when includes symbols or avatar is missing', () => {
        cy.contains("Crear Player").click()
        cy.get(".input-nickname").type('Luis18!', { force: true })
        cy.contains("Todos los campos deben ser llenados, evita usar simbolos").should("be.visible")
        cy.get(".input-nickname").clear()
    })

    it('should display "Todos los campos deben ser llenados, evita usar simbolos" when nickname is missing', () => {
        cy.get(".avatar1").click({force: true})
        cy.get("[src='/static/media/avatar-01.df97a60589dab19d9384.png']").should("be.visible")
    })

    it('should denied create player if nickname already exists', () => {
        cy.get(".input-nickname").type("Lila-2529", { force: true })
        cy.get(".create-player-submit").click()
        cy.contains("El nickname ya existe").should("be.visible")
        cy.get(".swal2-confirm").click()
        cy.get(".input-nickname").type("dos", { force: true })
    })

    it('should allow to create player', () => {
        cy.get(".create-player-submit").click()
        cy.get(".swal2-confirm").click()
        cy.wait(2000)
        cy.scrollTo('top')
    })
})