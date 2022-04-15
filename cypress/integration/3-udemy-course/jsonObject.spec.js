describe('JSON Objects', () => {

    it('JSON objects', () => {
        cy.openHomePage()

        const simpleObject = { "key": "value", "key2": "value2" } //Values have keys

        const simpleArrayObject = ["one", "two", "three"] //Values have indexes

        const arrayOfObjects = [{ "key": "value" }, { "key2": "value2" }]

        const typesOfData = { "string": "this is a string", "number": 10 }

        const mix = {
            "FirstName": "Artem",
            "LastName": "Bondar",
            "Age": 25,
            "Students": [
                {
                    "firstName": "Sara",
                    "lastName": "Conor"
                },
                {
                    "firstName": "Bruce",
                    "lastName": "Willis"
                }]
        }

        console.log(simpleObject.key2)
        console.log(simpleObject["key2"])
        console.log(simpleArrayObject[2])
        console.log(arrayOfObjects[1].key2)
        console.log(mix.Students[0].firstName)

    })
})