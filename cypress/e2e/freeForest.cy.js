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
        cy.contains('Posición')
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

describe('Create player', () => {

    beforeEach(() => {
        cy.visit('/create-player')
    })

    it('should display "Todos los campos deben ser llenados, evita usar simbolos" when includes symbols or avatar is missing', () => {
        cy.get(".input-nickname").type('Luis18!',{force:true})
        cy.contains("Todos los campos deben ser llenados, evita usar simbolos").should("be.visible")

        cy.get(".input-nickname").type('Luis18',{force:true})
        cy.contains("Todos los campos deben ser llenados, evita usar simbolos").should("be.visible")
    })

    it('should display "Todos los campos deben ser llenados, evita usar simbolos" when nickname is missing', () => {
        cy.get(".avatar1").click()
        cy.get("[src='/static/media/avatar-01.df97a60589dab19d9384.png']").should("be.visible")
    })

    it('should allow to create player', () => {

        //cy.intercept("POST","http://localhost:8080/players",{ fixture: "createPlayer.json" }).as('createPlayer')

        cy.get(".input-nickname").type('Luis18',{force:true})
        cy.get(".avatar1").click()
        cy.get(".create-player-submit").click()
        //cy.get(".swal2-confirm").click()
        //cy.get(".swal2-confirm").click()
    })

})