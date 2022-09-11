/// <reference types="cypress" />


describe('user should can login', () => {
    it('login', () => {
        cy.visit('/')
        cy.contains("Iniciar Sesion").click()
        cy.get("#username").type(`${Cypress.env('auth_username')}`)
        cy.get("#password").type(`${Cypress.env('auth_password')}`)
        cy.get("[type='submit']").contains("Iniciar sesión").click()
        cy.contains('TOP 10').should("be.visible")
    })
})