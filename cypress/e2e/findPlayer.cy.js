/// <reference types="cypress" />

describe('player should be found in the ranking list', () => {
    it('player can be found by nickname', () => {
        cy.contains("Ranking").click()
        cy.get("[type='text']").type("Lila-2529dos",{force: true})
        cy.contains("Buscar").click({force: true})
        cy.contains("Lila-2529dos").should("be.visible")
    })

    it('if player doesn´t exist, a message should be displayed on the screen saying "No se encontraron players"', () => {
        cy.get("[type='text']").clear({force: true})
        cy.get("[type='text']").type("Lila-2529tres",{force: true})
        cy.contains("Buscar").click({force: true})
        cy.contains("No se encontraron players").should("be.visible")
    })
})