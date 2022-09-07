/// <reference types="cypress" />

describe('FreeForest', () => {
    it('should see home view', () => {
        cy.visit('/')
        cy.contains('TOP 10')
    })
})

describe('User should can login', () => {
    it('login', () => {
        cy.get("[data-cy='login']").click()
        cy.contains('Iniciar Sesion').click()
        cy.get("#username").type(`${Cypress.env('auth_username')}`)
        cy.get("#password").type(`${Cypress.env('auth_password')}`)
        cy.get("[type='submit']").contains("Iniciar sesión").click()
        cy.contains('TOP 10').should("be.visible")
    })
})

describe('Chatbot should be functional', () => {
    it('respond correctly to "help", "about", "contact" and "game"', () => {
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

xdescribe('Create player', () => {
    beforeEach(() => {
        cy.visit('/create-player')
    })

    it('should display "Todos los campos deben ser llenados, evita usar simbolos" when includes symbols or avatar is missing', () => {
        cy.get(".input-nickname").type('Luis18!', { force: true })
        cy.contains("Todos los campos deben ser llenados, evita usar simbolos").should("be.visible")

        cy.get(".input-nickname").type('Luis18', { force: true })
        cy.contains("Todos los campos deben ser llenados, evita usar simbolos").should("be.visible")
    })

    it('should display "Todos los campos deben ser llenados, evita usar simbolos" when nickname is missing', () => {
        cy.get(".avatar1").click()
        cy.get("[src='/static/media/avatar-01.df97a60589dab19d9384.png']").should("be.visible")
    })

    it('should allow to create player', () => {

        //cy.intercept("POST","http://localhost:8080/players",{ fixture: "createPlayer.json" }).as('createPlayer')

        cy.get(".input-nickname").type('Luis18', { force: true })
        cy.get(".avatar1").click()
        cy.get(".create-player-submit").click()
        //cy.get(".swal2-confirm").click()
        //cy.get(".swal2-confirm").click()
    })
})

describe('User should can logout', () => {
    it('logout', () => {
        cy.get("[data-cy='login']").click()
        cy.contains('Salir').click()
    })
})