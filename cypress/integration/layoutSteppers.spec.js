import { onLayoutStepperPage } from "../support/page_objects/layoutSteppers"
import { navigateTo } from "../support/page_objects/navigationMenu"

describe('Complete each individual stepper and check ', () => {

  beforeEach('Reach the homepage', () => {

    cy.openHomePage()
    navigateTo.layoutStepper()

  })

  it('Complete the Horizontal Stepper and check if the "Step content #?" string is updated correctly', () => {

    onLayoutStepperPage.completeHorizontalStepper()

  })

  it('Complete the Input Stepper and check if the completion screen contains the correct string', () => {

    onLayoutStepperPage.completeInputStepper('This is a dummy text for step number ')

  })
})
