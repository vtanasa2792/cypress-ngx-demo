/// <reference types="cypress" />

describe('Invoke', () => {

    it('Invoke', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2
        cy.get('[for="exampleInputEmail1"]').then(inputLabel => {
            expect(inputLabel.text()).to.equal('Email address')


            //3
            cy.get('[for="exampleInputEmail1"]').invoke('text').then(textLabel => {
                expect(textLabel).to.equal('Email address')
            })

            cy.contains('nb-card', 'Basic form').find('nb-checkbox').click().find('.custom-checkbox').invoke('attr', 'class').should('contain', 'checked')
        })

    })

    it.only('Assert Proprety', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains('17').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Mar 17, 2022')
        })
    })
})