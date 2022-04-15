export class formLayoutsPage {

    submitInLineFormWithiNameAndEmail(inLineFormName, inLineFormEmail) {
        cy.contains('nb-card', 'Inline form').find('form').then(form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(inLineFormName)
            cy.wrap(form).find('[placeholder="Email"]').type(inLineFormEmail)
            cy.wrap(form).find('[type="checkbox"]').check({ force: true })
            cy.wrap(form).submit()
        })
    }

    submitBasicFormWithiNameAndPassword(basicFormEmail, basicFormPassword) {
        cy.contains('nb-card', 'Basic form').find('form').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(basicFormEmail)
            cy.wrap(form).find('[placeholder="Password"]').type(basicFormPassword)
            cy.wrap(form).find('[type="checkbox"]').check({ force: true })
            cy.wrap(form).submit()
        })
    }
}

export const onFormLayoutsPage = new formLayoutsPage()