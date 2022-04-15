/// <reference types="cypress" />

describe('Then and Wrap methods', () => {

    it('Then and Wrap methods', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        //cy.contains('nb-card') is repeated a lot
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        //Store the result of cy.contains into the usingTheGrid variable. - JQUERY STYLE
        cy.contains('nb-card', 'Using the Grid').then(usingTheGrid => {

            const emailLabelFirst = usingTheGrid.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = usingTheGrid.find('[for="inputPassword2"]').text()

            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then(basicForm => {

                const passwordLabelSecond = basicForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal(passwordLabelSecond)

                //Simplified using cy.wrap;
                cy.wrap(basicForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            })
        })
    })
})