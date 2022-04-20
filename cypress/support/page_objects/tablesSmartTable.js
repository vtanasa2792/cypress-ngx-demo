export class SmartTablePage {

  addNewTableEntry(userFirstName, userLastName) {

    let userId = Math.floor(Math.random() * (5000 - 1000)) + 1000
    let username = '@' + userFirstName.toLowerCase()
    let userEmail = userFirstName.charAt(0).toLowerCase() + userLastName.toLowerCase() + '@emailservice.com'
    let userAge = Math.floor(Math.random() * (90 - 0)) + 0

    cy.get('thead').find('.nb-plus').click()
    cy.get('thead tr').eq(2).find('td').then(newTableRowColumns => {

      cy.wrap(newTableRowColumns).eq(1).type(userId)
      cy.wrap(newTableRowColumns).eq(2).type(userFirstName)
      cy.wrap(newTableRowColumns).eq(3).type(userLastName)
      cy.wrap(newTableRowColumns).eq(4).type(username)
      cy.wrap(newTableRowColumns).eq(5).type(userEmail)
      cy.wrap(newTableRowColumns).eq(6).type(userAge)
      cy.get('.nb-checkmark').click()

    })

    cy.get('tbody').find('tr').eq(0).find('td').then(addedTableRowColumns => {

      cy.wrap(addedTableRowColumns).eq(1).should('contain', userId)
      cy.wrap(addedTableRowColumns).eq(2).should('contain', userFirstName)
      cy.wrap(addedTableRowColumns).eq(3).should('contain', userLastName)
      cy.wrap(addedTableRowColumns).eq(4).should('contain', username)
      cy.wrap(addedTableRowColumns).eq(5).should('contain', userEmail)
      cy.wrap(addedTableRowColumns).eq(6).should('contain', userAge)

    })
  }

  deleteEntryBasedOnFirstAndLastNames(userFirstName, userLastName) {

    cy.get('thead').then(tableHead => {

      cy.wrap(tableHead).find('[placeholder="First Name"]').type(userFirstName)
      cy.wrap(tableHead).find('[placeholder="Last Name"]').type(userLastName)
    })

    cy.wait(500)
    cy.get('tbody').then(tableBody => {

      if (tableBody.text().includes('No data found')) {

        throw new Error('This user does not exist.')

      } else {

        cy.wrap(tableBody).find('.nb-trash').click()
        cy.wrap(tableBody).should('contain', 'No data found')

      }
    })
  }
}

export const onSmartTablePage = new SmartTablePage()
