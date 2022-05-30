import { CdkOverlayOrigin } from "@angular/cdk/overlay"

export class SmartTablePage {

  addNewTableEntry(userFirstName, userLastName) {

    let userId = Math.floor(Math.random() * (5000 - 1000)) + 1000
    let username = '@' + userFirstName.toLowerCase()
    let userEmail = userFirstName.charAt(0).toLowerCase() + userLastName.toLowerCase() + '@emailservice.com'
    let userAge = Math.floor(Math.random() * (90 - 0)) + 0
    let variablesToUse = [userId, userFirstName, userLastName, username, userEmail, userAge]

    cy.get('thead').find('.nb-plus').click()
    cy.get('thead tr').eq(2).find('td').not('.ng2-smart-actions').each((newTableRowColumns, index) => {
      cy.wrap(newTableRowColumns).type(variablesToUse[index])
    })
    cy.get('.nb-checkmark').click()
    cy.get('tbody').find('tr').eq(0).find('td').not('.ng2-smart-actions').each((addedTableRowColumns, index) => {
      cy.wrap(addedTableRowColumns).should('contain', variablesToUse[index])
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

  deleteEndriesBasedOnEmailDomain(emailDomain) {
    cy.get('[placeholder="E-mail"]').type(emailDomain)
    cy.wait(500)
    cy.get('tbody tr').each(searchResults => {
      cy.get('tbody').then(tableBody => {
        if (tableBody.text().includes('No data found')) {
          throw new Error('No users with ' + emailDomain + ' domain found.')
        } else {
          cy.get('tbody tr').find('td').eq(5).should('contain', emailDomain)
          cy.get('.nb-trash').first().click()
        }
      })
    })
  }
}

export const onSmartTablePage = new SmartTablePage()
