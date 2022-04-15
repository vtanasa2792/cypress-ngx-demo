/// <reference types="cypress" />

describe('Lists and Dropdowns', () => {

    it('Themes', () => {

        cy.visit('/')

        //This test case utilizes the .each() function to itterate through a number of elements dynamically using their index. .each((theme, indexOfTheme) => {})

        cy.get('nav nb-select').then(collapsedThemeList => { //Get the THEME LIST button and save it in collapsedThemeList;
            cy.wrap(collapsedThemeList).click() //.click on collapsedThemeList;

            cy.get('.options-list nb-option').each((themeSelector, themeIndex) => { //Get the themes in the list and save them in themeSelector;
                const themeName = themeSelector.text().trim() //Get the text from the themeSelector, conver it to text and save it in themeName;

                const themeRgbValue = { //Create a JSON object with RGB values for each theme;
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)"
                }

                cy.wrap(themeSelector).click() //Click on the current themeSelector;
                cy.wrap(collapsedThemeList).should('contain', themeName) //Check whether the collapsedThemeList contains the themeName of the selected theme;
                cy.get('nb-layout-header nav').should('have.css', 'background-color', themeRgbValue[themeName]) //Get the header. Check that it has the correct background-color by cross checking the themeRgbValue based on each themeName;

                cy.log('This step was done for theme ' + themeName + ' with ' + themeRgbValue[themeName])

                if (themeIndex < 3) { //If the themeIndex is < 3 then click the collapsedThemeList;
                    cy.wrap(collapsedThemeList).click()
                } else {
                    cy.log('We are done')
                }
            })
        })
    })
})

