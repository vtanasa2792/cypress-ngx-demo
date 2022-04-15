/// <reference types="cypress" />

// HTML5 Locator Types and how to find them using Cypress;
// Cypress uses Jquery locator engine;

describe('Locator Types', () => {

    it('Find DOM Element', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        //By TAG NAME
        cy.get('input')

        //By ID
        cy.get('#inputEmail1')

        //By CLASS VALUE - Can search only by ONE class
        cy.get('.input-full-width')

        //By ATTRIBUTE NAME
        cy.get('[placeholder]')

        //By ATTRIBUTE NAME & VALUE
        cy.get('[placeholder="Email"]')

        //By CLASS VALUE - Requires the FULL value of the class
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //By TAG NAME & ATTRIBUTE WITH VALUE
        cy.get('input[placeholder="Email"]')

        //By TWO DIFFERENT ATTRIBUTES
        cy.get('[placeholder="Email"][fullwidth]')

        //By TAG NAME, ATTRIBUTE WITH VALUE, ID, CLASS NAME
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //Recommended by CYPRESS - Create your own custom attributes used specifically for CYPRESS
        cy.get('[data-cy="imputEmail1"]')
    })
})