// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { createYield } from "typescript";

Cypress.Commands.add('openHomePage', () => {
  cy.visit('/')
})

// Cypress.Commands.add('selectFeatureGroup', (groupName) => {
//   cy.contains('a', groupName).then(featureGroup => {
//     cy.wrap(featureGroup).find('.expand-state').invoke('attr', 'ng-reflect-icon').then(expandState => {
//       if (expandState.includes('left')) {
//         cy.wrap(featureGroup).click()
//       }
//     })
//   })
// })
