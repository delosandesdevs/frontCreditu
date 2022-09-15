/// <reference types="cypress" />

describe('user should log in', () => {
    it('login', () => {
        cy.visit('/')
        cy.contains("Iniciar Sesion").click()
        cy.get("#username").type('teste2edelosandes@gmail.com')
        cy.get("#password").type('Delosandes_2022')
        cy.get("[type='submit']").contains("Iniciar sesión").click()
        cy.contains('TOP 10').should("be.visible")
    })
})


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

describe('player should be found in the ranking list', () => {
    it('if player doesn´t exist, a message should be displayed on the screen saying "No se encontraron players"', () => {
        cy.wait(2000)
        cy.scrollTo('top')
        cy.contains("Ranking").click()
        cy.get("[type='text']").type("Lila-2529tres",{force: true})
        cy.contains("Buscar").click({force: true})
        cy.contains("No se encontraron players").should("be.visible")
        cy.get("[type='text']").clear({force: true})
    })

    it('player can be found by nickname', () => {
        cy.get("[type='text']").type("Lila-2529dos",{force: true})
        cy.contains("Buscar").click({force: true})
        cy.contains("Lila-2529dos").should("be.visible")
    })
})

describe('editPlayer', () => {
    it('User can modify his player', () => {
        cy.get("[data-cy='login']").click()
        cy.wait(1000)
        cy.get("[href='/profile']").contains("Perfil").click()
        cy.wait(1000)
        cy.contains("Edita tu player").click({force: true})
        cy.get("[type='text']").clear({force: true})
        cy.get("[type='text']").type("creditu", { force: true })
        cy.get("[type='number']").clear({force: true})
        cy.get("[type='number']").type("3500", { force: true })
        cy.get(".create-player-submit").click()
        cy.get(".swal2-confirm").click()
    })
})

describe('Delete player', () => {
    it('user should be able to delete his player', () => {
        cy.get("[data-cy='login']").click()
        cy.wait(1000)
        cy.get("[href='/profile']").contains("Perfil").click()
        cy.wait(1000)
        cy.scrollTo("top")
        cy.contains("creditu").should("be.visible")
        cy.wait(1000)
        cy.contains("BORRAR PLAYER").click({force: true})
        cy.get(".swal2-confirm").click()
        cy.get(".swal2-confirm").click()
    })
})

describe('User should logout', () => {
    it('logout', () => {
        cy.get("[data-cy='login']").click()
        cy.contains('Salir').click()
    })
})