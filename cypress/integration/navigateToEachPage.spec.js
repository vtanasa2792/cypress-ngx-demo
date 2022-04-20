import { navigateTo } from "../support/page_objects/navigationMenu"

describe('Navigate to each feature page and check if the URL is correct', () => {

  beforeEach('Reach the homepage', () => {

    cy.openHomePage()

  })

  it('Navigate to each Layout page', () => {

    navigateTo.layoutStepper()
    cy.url().should('contain', '/layout/stepper')

    navigateTo.layoutAccordion()
    cy.url().should('contain', '/layout/accordion')

  })

  it('Navigate to each Forms page', () => {

    navigateTo.formsLayouts()
    cy.url().should('contain', '/forms/layouts')

    navigateTo.formsDatepicker()
    cy.url().should('contain', '/forms/datepicker')

  })

  it('Navigate to each Modal & Overlays page', () => {

    navigateTo.modalDialog()
    cy.url().should('contain', '/modal-overlays/dialog')

    navigateTo.modalWindow()
    cy.url().should('contain', '/modal-overlays/window')

    navigateTo.modalPopover()
    cy.url().should('contain', '/modal-overlays/popover')

    navigateTo.modalToastr()
    cy.url().should('contain', '/modal-overlays/toastr')

    navigateTo.modalTooltip()
    cy.url().should('contain', '/modal-overlays/tooltip')

  })

  it('Navigate to each Extra Components page', () => {

    navigateTo.extraCalendar()
    cy.url().should('contain', '/extra-components/calendar')

  })

  it('Navigate to each Tables & Data page', () => {

    navigateTo.tablesSmartTable()
    cy.url().should('contain', '/tables/smart-table')

    navigateTo.tablesTreeGrid()
    cy.url().should('contain', '/tables/tree-grid')

  })

  it.only('Navigate each to Auth page', () => {

    navigateTo.authLogin()
    cy.url().should('contain', '/auth/login')
    navigateTo.closeAuthPages()

    navigateTo.authRegister()
    cy.url().should('contain', '/auth/register')
    navigateTo.closeAuthPages()

    navigateTo.authRequestPassword()
    cy.url().should('contain', '/auth/request-password')
    navigateTo.closeAuthPages()

    navigateTo.authResetPassword()
    cy.url().should('contain', '/auth/reset-password')

  })


})
