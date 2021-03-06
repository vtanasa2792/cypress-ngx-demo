function selectDayFromToday(daysAhead) {

  //A function used to calculate and select a future date based on the formula of Today + Days Ahead (i.e.: Today 1st of January + 3 Days Ahead will select 4th of January);
  //The function also accounts for the fact the desired date might be beyond the current month or year and so it cycles through the Date Picker accordingly;

  const date = new Date()
  date.setDate(date.getDate() + daysAhead)
  const futureDay = date.getDate()
  const futureMonth = date.toLocaleString('en-us', { month: 'short' })
  const futureYear = date.getFullYear()
  const fullDate = futureMonth + ' ' + futureDay + ', ' + futureYear

  cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
    if (!dateAttribute.includes(futureMonth) || (!dateAttribute.includes(futureYear))) {
      cy.get('[data-name="chevron-right"]').click()
      selectDayFromToday(daysAhead)
    } else {
      cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
    }
  })
  return fullDate
}

export class FormDatepickersPage {
  formsCommonDatepickerDaysFromToday(daysFromToday) {
    cy.contains('nb-card', 'Common Datepicker').find('input').then(dateInput => {
      cy.wrap(dateInput).click()

      let finalDate = selectDayFromToday(daysFromToday)

      cy.wrap(dateInput).invoke('prop', 'value').should('contain', finalDate)
    })
  }

  formsDatepickerWithRange(firstDay, secondDay) {
    cy.contains('nb-card', 'Datepicker With Range').find('input').then(dateInput => {
      cy.wrap(dateInput).click()

      let firstDate = selectDayFromToday(firstDay)
      let secondDate = selectDayFromToday(secondDay)
      let finalDate = firstDate + ' - ' + secondDate

      cy.wrap(dateInput).invoke('prop', 'value').should('contain', finalDate)
    })
  }
}

export const onFormDatepickersPage = new FormDatepickersPage
