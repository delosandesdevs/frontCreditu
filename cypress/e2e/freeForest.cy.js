/// <reference types="cypress" />


/* describe('user should can login', () => {
    it('login', () => {
        cy.visit('/')
        cy.contains("Iniciar sesión").click()
        cy.get("#username").type(`${Cypress.env('auth_username')}`)
        cy.get("#password").type(`${Cypress.env('auth_password')}`)
        cy.get("[type='submit']").contains("Iniciar sesión").click()
        cy.contains('TOP 10').should("be.visible")
    })
}) */

/* describe('Chatbot', () => {
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
}) */

/* describe('Create player', () => {
    
    it('should display "Todos los campos deben ser llenados, evita usar simbolos" when includes symbols or avatar is missing', () => {
        cy.contains("Crear Player").click()
        cy.get(".input-nickname").type('Luis18!', { force: true })
        cy.contains("Todos los campos deben ser llenados, evita usar simbolos").should("be.visible")
        cy.get(".input-nickname").clear()
    })

    it('should display "Todos los campos deben ser llenados, evita usar simbolos" when nickname is missing', () => {
        cy.get(".avatar1").click()
        cy.get("[src='/static/media/avatar-01.df97a60589dab19d9384.png']").should("be.visible")
    })

    it('should denied create player if nickname already exists', () => {
        cy.get(".input-nickname").type("Lila", { force: true })
        cy.get(".create-player-submit").click()
        cy.contains("El nickname ya existe").should("be.visible")
        cy.wait(1000)
        cy.get(".swal2-confirm").click()
        cy.get(".input-nickname").type("dos", { force: true })
    })

    it('should allow to create player', () => {
        cy.get(".create-player-submit").click()
        cy.wait(1000)
        cy.get(".swal2-confirm").click()
        cy.wait(2000)
        cy.scrollTo('top')
    })
}) */

/* describe('Delete player', () => {
    it('user should be able to delete his player', () => {
        cy.get("[data-cy='login']").click()
        cy.contains("Perfil").click()
        cy.wait(2000)
        cy.contains("BORRAR PLAYER").click({force: true})
        cy.get(".swal2-confirm").click()
        cy.get(".swal2-confirm").click()
    })
}) */

/* describe('User should can logout', () => {
    it('logout', () => {
        cy.get("[data-cy='login']").click()
        cy.contains('Salir').click()
    })
}) */