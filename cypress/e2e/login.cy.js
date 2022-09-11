/// <reference types="cypress" />


describe('user should can login', () => {
    it('login', () => {
        cy.visit('/')
        cy.contains("Iniciar Sesion").click()
        cy.get("#username").type('teste2edelosandes@gmail.com')
        cy.get("#password").type('Delosandes_2022')
        cy.get("[type='submit']").contains("Iniciar sesión").click()
        cy.contains('TOP 10').should("be.visible")
    })
})