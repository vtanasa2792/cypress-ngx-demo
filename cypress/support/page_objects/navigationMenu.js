function selectFeatureGroup(groupName) {

  //A function used to select and expand the desired Feature Group (Navigation Menu) so that subsequent commands for accessing the Sub-Features is easier;
  //The function checks to see if the Feature Group is expanded in order for the Sub-Features to be accessible;

  cy.contains('a', groupName).then(featureGroup => {
    cy.wrap(featureGroup).find('.expand-state').invoke('attr', 'ng-reflect-icon').then(expandState => {
      if (expandState.includes('left')) {
        cy.wrap(featureGroup).click()
      }
    })
  })
}

export class PageNavigation {

  layoutStepper() {
    selectFeatureGroup('Layout')
    cy.contains('Stepper').click()
  }

  layoutAccordion() {
    selectFeatureGroup('Layout')
    cy.contains('Accordion').click()
  }

  formsLayouts() {
    selectFeatureGroup('Forms')
    cy.contains('Form Layouts').click()
  }

  formsDatepicker() {
    selectFeatureGroup('Forms')
    cy.contains('Datepicker').click()
  }

  modalDialog() {
    selectFeatureGroup('Modal & Overlays')
    cy.contains('Dialog').click()
  }

  modalWindow() {
    selectFeatureGroup('Modal & Overlays')
    cy.contains('Window').click()
  }

  modalPopover() {
    selectFeatureGroup('Modal & Overlays')
    cy.contains('Popover').click()
  }

  modalToastr() {
    selectFeatureGroup('Modal & Overlays')
    cy.contains('Toastr').click()
  }

  modalTooltip() {
    selectFeatureGroup('Modal & Overlays')
    cy.contains('Tooltip').click()
  }

  extraCalendar() {
    selectFeatureGroup('Extra Components')
    cy.contains('Calendar').click()
  }

  tablesSmartTable() {
    selectFeatureGroup('Tables & Data')
    cy.contains('Smart Table').click()
  }

  tablesTreeGrid() {
    selectFeatureGroup('Tables & Data')
    cy.contains('Tree Grid').click()
  }

  authLogin() {
    selectFeatureGroup('Auth')
    cy.contains('Login').click()
  }

  authRegister() {
    selectFeatureGroup('Auth')
    cy.contains('Register').click()
  }

  authRequestPassword() {
    selectFeatureGroup('Auth')
    cy.contains('Request Password').click()
  }

  authResetPassword() {
    selectFeatureGroup('Auth')
    cy.contains('Reset Password').click()
  }

  closeAuthPages() {
    cy.get('.link').click()
  }
}

export const navigateTo = new PageNavigation()
