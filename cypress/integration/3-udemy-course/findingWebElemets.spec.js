/// <reference types="cypress" />

//cy.get() - Grabs all elements that fit given parameters;
//cy.contains() - Grabs first element that contains a string. Can be chained after everything and it also accepts locators BEFORE the string; i.e. cy.contains('header','This is a title')
//cy.find() - Grabs CHILDREN elements that fit given parameters;

describe('Second Test', () => {

    it('Find DOM Element', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        //By CUSTOM ATTRIBUTE
        cy.get('[data-cy="signInButton"]')

        //By ATTRIBUTE & STRING - Contain finds and picks the FIRST element that fits the parameters
        cy.contains('[status="warning"]', 'Sign in')

        //Travel UPWARDS from an unique element
        //Get element with ID #inputEmail3 then go to its parent named form then find 
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()
            .find('span')
            .should('have.class', 'checked')

        //Shorter way to quickly find a parent based on an unique indentifier. 
        //Cypress, find the nb-card element which contains the Horizontal form header then find the child element with attribute type="email"
        cy.contains('nb-card', 'Horizontal form')
            .find('[type="email"]')
    })
})