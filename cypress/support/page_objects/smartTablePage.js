export class SmartTable {

    updateAgeByFirstName(smartTableName, smartTableAge) {
        cy.get('tbody').contains('tr', smartTableName).then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(smartTableAge)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('have.text', smartTableAge)
        })
    }

    addNewRecordWithFirstAndLastName(smartTableFirstName, smartTableLastName) {
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow2 => {
            cy.wrap(tableRow2).find('[placeholder="First Name"]').type(smartTableFirstName)
            cy.wrap(tableRow2).find('[placeholder="Last Name"]').type(smartTableLastName)
            cy.wrap(tableRow2).find('.nb-checkmark').click()
            cy.get('tbody tr').eq(0).find('td').then(tableRow2Whole => {
                cy.wrap(tableRow2Whole).eq(2).should('have.text', smartTableFirstName)
                cy.wrap(tableRow2Whole).eq(3).should('have.text', smartTableLastName)
            })
        })
    }

    deleteRowByIndex(smartTableIndex) {
        const stub = cy.stub()
        cy.get('tbody tr').eq(smartTableIndex).find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
    }

}

export const onSmartTablePage = new SmartTable()