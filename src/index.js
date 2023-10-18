const loadExcel = require('./utils/loadExcel')
const createUser = require("./core/repositories/createUser");
const chooseIsAvailable = require('./core/chooseIsAvailable')

    // Here you can see the main function that will be executed
    (async () => {
        /*
            // If First start the app - Here you will write the logic to load the excel file
            const file = 'file.xlsx'
            const excelData = await loadExcel(file)

            // Here you will implement the logic to create the users in the database
            const user = {
                id: "11000000",
                contract: "11000000",
                branchOffices: [],
                restrictions: [],
            }

            // Here you will call the createUser function

            for (const user of excelData) {
                await createUser(user)
            }               
        */

        //

        // Here you call the database and get the users and restrictions
        const users = []
        const restrictions = []

        // Here we will get the users and restrictions from the database
        await chooseIsAvailable(users, restrictions)
    })()