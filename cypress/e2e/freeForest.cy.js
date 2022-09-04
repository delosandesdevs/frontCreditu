/// <reference types="cypress" />


describe('FreeForest navegavility', () => {

    it('should see home view', () => {
        cy.visit('/')
        cy.contains('TOP 10')
    })

    it('should see create player view', () => {
        cy.visit('/create-player')
        cy.contains('CREAR PLAYER')
    })

    it('should see ranking view', () => {
        cy.visit('/ranking')
        cy.contains('Puesto')
    })
    
    it('should see acerca de view', () => {
        cy.visit('/about')
        cy.contains('DESARROLLADORES')
    })
})

describe('Chatbot should be functional', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('opened and close correctly', () => {
        cy.get('.chat-button').click()
        cy.get('.chat-button').click()
    })

    it('respond to "help"', () => {
        cy.get('.chat-button').click()
        cy.get('.react-chatbot-kit-chat-input').type('ayuda')
        cy.get('.react-chatbot-kit-chat-btn-send').click()
        cy.contains('Somos')
    })
    
    it('respond to "about"', () => {
        cy.get('.chat-button').click()
        cy.get('.react-chatbot-kit-chat-input').type('acerca de')
        cy.get('.react-chatbot-kit-chat-btn-send').click()
        cy.contains('Somos')
    })
    
    it('respond to "contact"', () => {
        cy.get('.chat-button').click()
        cy.get('.react-chatbot-kit-chat-input').type('contacto')
        cy.get('.react-chatbot-kit-chat-btn-send').click()
        cy.contains('contactarte')
    })
    
    it('respond to "game"', () => {
        cy.get('.chat-button').click()
        cy.get('.react-chatbot-kit-chat-input').type('juego')
        cy.get('.react-chatbot-kit-chat-btn-send').click()
        cy.contains('Juguemos')
    })

})