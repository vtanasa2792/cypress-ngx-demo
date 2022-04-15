/// <reference types="cypress" />

const { getDefaultSettings } = require("http2")

describe('Date Pickers', () => {

    it('Date Picker', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        cy.get('[placeholder="Form Picker"]').click()

        let date = new Date()
        date.setDate(date.getDate() + 2)
        let futureDay = date.getDate()
        let futureMonth = date.toLocaleDateString('default', { month: 'short' })

        cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
            if (dateAttribute.includes(futureMonth)) {
                cy.get('[data-name="chevron-right"]').click()
                cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
            } else {
                cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
            }

        })

    })
})