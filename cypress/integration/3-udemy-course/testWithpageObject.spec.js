import { _ } from "core-js"
import { onDatePickerPage } from "../../support/page_objects/datePickerPage"
import { onFormLayoutsPage } from "../../support/page_objects/formLayoutsPage"
import { navigateTo, onNavigationPage } from "../../support/page_objects/navigationPage"
import { onSmartTable, onSmartTablePage } from "../../support/page_objects/smartTablePage"

describe('Test with Pabe Objects', () => {

    beforeEach('Open application', () => {
        cy.openHomePage()

    })

    it('Verify navigation across the pages', () => {

        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
        navigateTo.smartTablePage()
    })

    it('Should submit Inline and Basic form', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInLineFormWithiNameAndEmail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithiNameAndPassword('username', 'password')
    })

    it('Datepicker', () => {
        navigateTo.datePickerPage()
        //onDatePickerPage.selectCommonDatePickerDateFromToday(30)
        onDatePickerPage.selectDatePickerWithRangeFromToday(1, 2)
    })

    it.only('Smart Tables', () => {
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Vali', 'Tanasa')
        onSmartTablePage.updateAgeByFirstName('Vali', '30')
        onSmartTablePage.deleteRowByIndex(1)

    })

})