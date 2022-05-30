export class FormLayoutsPage {

  completeInlineForm(userName, userEmail) {

    cy.intercept({
      method: 'GET',
      path: '**/sockjs-node/*'
    }).as('submitSuccessful')

    cy.get('[class="inline-form-card"]').then(inlineForm => {
      cy.wrap(inlineForm).find('input').eq(0).type(userName)
      cy.wrap(inlineForm).find('input').eq(1).type(userEmail)
      cy.wrap(inlineForm).find('[class="custom-checkbox"]').click()
      cy.wrap(inlineForm).find('form').submit()
    })

    cy.get('@submitSuccessful').then(submitSuccesful => {
      expect(submitSuccesful.response.statusCode).to.eq(200)

      //This response is actually triggered when the page reloads and not as a direct result of Submitting the form;
      //Since the Submission process is "fake", this response was used to mock how a successfull Submition would be tested;
    })
  }

  completeFormWithoutLabels(recipients, subject, message) {
    cy.intercept({
      method: 'GET',
      path: '**/sockjs-node/*'
    }).as('submitSuccessful')

    cy.contains('nb-card', 'Form without labels').then(formWithoutLabels => {
      cy.wrap(formWithoutLabels).find('[placeholder="Recipients"]').type(recipients)
      cy.wrap(formWithoutLabels).find('[placeholder="Subject"]').type(subject)
      cy.wrap(formWithoutLabels).find('[placeholder="Message"]').then(messageField => {
        cy.wrap(messageField).invoke('attr', 'style', 'height: 250px;').type(message)
      })
      cy.wrap(formWithoutLabels).find('form').submit()
    })

    cy.get('@submitSuccessful').then(submitSuccesful => {
      expect(submitSuccesful.response.statusCode).to.eq(200)

      //This response is actually triggered when the page reloads and not as a direct result of Submitting the form;
      //Since the Submission process is "fake", this response was used to mock how a successfull Submition would be tested;
    })
  }

  radioButtons() {
    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
      cy.wrap(radioButtons).eq(0).check({ force: true }).should('be.checked')
      cy.wrap(radioButtons).eq(1).check({ force: true }).should('be.checked')
      cy.wrap(radioButtons).eq(0).should('not.be.checked')
      cy.wrap(radioButtons).eq(2).should('be.disabled')
    })
  }
}

export const onFormLayoutsPage = new FormLayoutsPage
