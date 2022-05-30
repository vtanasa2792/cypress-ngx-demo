import { navigateTo } from "../support/page_objects/navigationMenu"
import { onSmartTablePage } from "../support/page_objects/tablesSmartTable"

describe('Smart Tables', () => {

  beforeEach('', () => {
    cy.openHomePage()
    navigateTo.tablesSmartTable()
  })

  it('Add a new entry into the table, verify it', () => {

    //ID and Age are randomly generated.
    //Username and Email are generated based on the First and Last names;

    onSmartTablePage.addNewTableEntry('Benevolent', 'Cucumberbatch')
  })

  it('Search for and delete an entry based on the First and Last names', () => {

    //Can be added to the previous test to delete the created entry.
    //Throws an explicit error if the user does not exist. Unnecessary but fun.

    onSmartTablePage.deleteEntryBasedOnFirstAndLastNames('Ann', 'Smith')
  })

  it('Delete entries based on Email Domain', () => {

    //Searches and deletes entries based on the email domain.
    //Throws an error if no users matching the email domain are found.

    onSmartTablePage.deleteEndriesBasedOnEmailDomain('@gmail.com')
  })
})
