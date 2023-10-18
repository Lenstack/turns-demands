const readExcel = require('./utils/readExcel')
const createUser = require("./core/repositories/createUser");
const chooseIsAvailable = require('./core/chooseIsAvailable')

    // Here you can see the main function that will be executed
    (async () => {

        // If First start the app - Here you will write the logic to load the excel file
        const file = 'file.xlsx'
        const excelData = await readExcel(file)

        const users = []
        const restrictions = []
        for (const excel of excelData) {

            const user = {
                id: excel.id,
                contract: excel.contract,
                branchOffices: excel.branchOffices,
            }

            const restrictions = {
                id: excel.id,
                restriction: excel.restriction
            }

            // Here you will implement the logic to create the users in the database
            const userCreated = await createUser(user)

            users.push(userCreated)
            restrictions.push(restrictions)

        }

        // Here you call the database and get the users and restrictions
        // const users = await getUsers()
        // const restrictions = await getRestrictions()

        // Here we will get the users and restrictions from the database
        await chooseIsAvailable(users, restrictions)
    })()