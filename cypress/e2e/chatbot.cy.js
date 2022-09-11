/// <reference types="cypress" />

describe('Chatbot', () => {
    it('should respond correctly to "help", "about", "contact" and "game"', () => {
        cy.get('.chat-button').click()
        cy.get('.react-chatbot-kit-chat-input').type('ayuda')
        cy.get('.react-chatbot-kit-chat-btn-send').click()
        cy.contains('Somos').should("be.visible")

        cy.get('.react-chatbot-kit-chat-input').type('acerca de')
        cy.get('.react-chatbot-kit-chat-btn-send').click()
        cy.contains('Somos').should("be.visible")

        cy.get('.react-chatbot-kit-chat-input').type('contacto')
        cy.get('.react-chatbot-kit-chat-btn-send').click()
        cy.contains('contactarte').should("be.visible")

        cy.get('.react-chatbot-kit-chat-input').type('juego')
        cy.get('.react-chatbot-kit-chat-btn-send').click()
        cy.contains('Juguemos').should("be.visible")
        cy.get('.chat-button').click()
    })
})