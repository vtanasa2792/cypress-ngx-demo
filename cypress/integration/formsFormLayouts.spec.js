import { onFormLayoutsPage } from "../support/page_objects/formsFormLayouts"
import { navigateTo } from "../support/page_objects/navigationMenu"

describe('Fill in and submit various Form Layouts', () => {

  beforeEach('Reach the homepage', () => {
    cy.openHomePage()
    navigateTo.formsLayouts()
  })

  it('Fill and submit the Inline Form. Intercept the submission request and check if the status is 200', () => {
    onFormLayoutsPage.completeInlineForm('Test User', 'testEmail@email.com')
  })

  it('Fill and submit the Form without labels. Intercept the submission request and check if the status is 200', () => {
    cy.fixture('dummyEmails').then(emailList => {
      onFormLayoutsPage.completeFormWithoutLabels(emailList.dummyEmails.join(', '), 'Hello everyone!', 'I have expanded the Message field and I have filled it with random text.')
    })
  })

  it('Verify that only one radio button can be checked at all times and check if the third one is disabled', () => {
    onFormLayoutsPage.radioButtons()
  })
})
