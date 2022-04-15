/// <reference types="cypress" />

describe('Tables', () => {

    it('Smart Tables', () => {

        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        //Edit age of Larry row;
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('have.text', '25')
        })

        //Add new row;
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow2 => {
            cy.wrap(tableRow2).find('[placeholder="First Name"]').type('FirstName')
            cy.wrap(tableRow2).find('[placeholder="Last Name"]').type('LastName')
            cy.wrap(tableRow2).find('.nb-checkmark').click()
            cy.get('tbody tr').eq(0).find('td').then(tableRow2Whole => {
                cy.wrap(tableRow2Whole).eq(2).should('have.text', 'FirstName')
                cy.wrap(tableRow2Whole).eq(3).should('have.text', 'LastName')
            })

        })

        //Loop Table Search;
        cy.get('thead [placeholder="Age"]').type('20')
        cy.wait(500)
        cy.get('tbody tr').each(tableRow => {

            cy.wrap(tableRow).find('td').eq(6).should('have.text', '20')
            cy.wrap(tableRow).find('td').eq(2).then(firstNameColumn => {
                const userFirstName = firstNameColumn.text()
                cy.log('This step was done for the user named: ' + userFirstName)
            })
        })

        //Multiple Ages;
        const age = [20, 30, 40, 200]

        cy.wrap(age).each(age => {
            cy.get('thead [placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each(tableRow => {
                if (age == 200) {
                    cy.wrap(tableRow).should('have.text', 'No data found')
                } else {
                    cy.wrap(tableRow).find('td').eq(6).should('have.text', age)
                    cy.wrap(tableRow).find('td').eq(2).then(firstNameColumn => {
                        const userFirstName = firstNameColumn.text()
                        cy.log('This step was done for the user named: ' + userFirstName)
                    })
                }
            })
        })
    })
})