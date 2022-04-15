describe('Locator Types', () => {

    it('Find DOM Element', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        //Cypress mainly uses Chai Assertions
        //A standard Chai assertions looks like this: expect($el).to.have.class('X')

        cy.get('[data-cy="imputEmail1"]').then(emailField => {
            expect(emailField).to.have.id('inputEmail1')
            expect(emailField).to.have.class('input-full-width size-medium shape-rectangle')

            //Can also be used with .wrap()
            cy.wrap(emailField).should('have.id', 'inputEmail1')
        })

        //The simplified Cypress way of using Chai assertions is through .should like this: .should('have.class','x')
        cy.get('[data-cy="imputEmail1"]')
            .should('have.id', 'inputEmail1')
            .and('have.class', 'input-full-width size-medium shape-rectangle')

    })


})