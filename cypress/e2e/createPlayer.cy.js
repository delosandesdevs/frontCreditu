/// <reference types="cypress" />

describe('Create player', () => {
    it('should display "Todos los campos deben ser llenados, evita usar simbolos" when nickname includes symbols or the avatar is missing', () => {
        cy.contains("Crear Player").click()
        cy.get("[type='text']").type('Luis18!', { force: true })
        cy.contains("Todos los campos deben ser llenados, evita usar simbolos").should("be.visible")
        cy.get("[type='text']").clear()
    })

    it('should display "Todos los campos deben ser llenados, evita usar simbolos" when nickname is missing', () => {
        cy.get(".avatar1").click({force: true})
        cy.get("[src='/static/media/avatar-01.df97a60589dab19d9384.png']").should("be.visible")
    })

    it('should deny creating player if the nickname already exists', () => {
        cy.get("[type='text']").type("Lila-2529", { force: true })
        cy.get(".create-player-submit").click({force: true})
        cy.contains("El nickname ya existe").should("be.visible")
        cy.get(".swal2-confirm").click()
    })
    
    it('should allow to create player', () => {
        cy.get("[type='text']").type("dos", { force: true })
        cy.get(".create-player-submit").click()
        cy.get(".swal2-confirm").click()
    })
})