let stepIndex = 0

export class LayoutStepperPage {

  completeHorizontalStepper() {

    cy.get('[test-data="horizontal-stepper"]').find('[class="header"]').then(horizontalStepperHeader => {

      cy.wrap(horizontalStepperHeader).find('[class^="step"]').each(() => {

        cy.get('[test-data="horizontal-stepper"]').should('contain', 'Step content #' + ++stepIndex)

        if (stepIndex <= 3) {

          cy.contains('next').click({ force: true })

        }
      })
    })
  }

  completeInputStepper(inputText) {

    cy.get('[test-data="input-stepper"]').find('[class="header"]').then(inputStepperHeader => {

      cy.wrap(inputStepperHeader).find('[class^="step"]').each(() => {

        cy.get('input').type(inputText + ++stepIndex + '{enter}')

      })

      cy.get('[test-data="input-stepper"]').should('contain', 'Wizard completed!')

    })
  }
}

export const onLayoutStepperPage = new LayoutStepperPage()
