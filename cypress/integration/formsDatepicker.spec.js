import { onFormDatepickersPage } from "../support/page_objects/formsDatepickers"
import { navigateTo } from "../support/page_objects/navigationMenu"

describe('Date picker', () => {
  beforeEach('Reach Homepage', () => {
    cy.openHomePage()
    navigateTo.formsDatepicker()
  })

  it('Select a date X days from today and check that the future date is correctly displayed', () => {
    onFormDatepickersPage.formsCommonDatepickerDaysFromToday(37)
  })

  it('Select a date range in the format of X days from today and check that the range is correctly displayed', () => {
    onFormDatepickersPage.formsDatepickerWithRange(2, 30)
  })
})
