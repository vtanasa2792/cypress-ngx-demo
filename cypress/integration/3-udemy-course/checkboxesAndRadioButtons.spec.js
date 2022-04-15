/// <reference types="cypress" />

describe('Checkboxes and Radio Buttons', () => {

    it('Radio Buttons', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons)
                .first()
                .check({ force: true })
                .should('be.checked')
            cy.wrap(radioButtons)
                .eq(1)
                .check({ force: true })
                .should('be.checked')
            cy.wrap(radioButtons)
                .eq(0)
                .should('not.be.checked')
            cy.wrap(radioButtons)
                .eq(2)
                .should('be.disabled')
        })
    })

    it.only('Check boxes', () => {

        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.get('[type="checkbox"]').then(checkBoxes => {
            cy.wrap(checkBoxes).eq(0).uncheck({ force: true }).should('not.be.checked')
            cy.wrap(checkBoxes).eq(1).check({ force: true }).should('be.checked')
            cy.wrap(checkBoxes).eq(2).uncheck({ force: true }).should('not.be.checked')
        })
    })
})