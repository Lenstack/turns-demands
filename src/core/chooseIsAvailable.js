//TODO: Implement the logic verify if the users are available by the restrictions
const chooseIsAvailable = async (users, restrictions) => {
    //verify if the user pass the restrictions
    for (const user of users) {
        switch (restrictions) {
            case 'restriction':
                console.log('The user is available')
                break;
            default:
                console.log('The user is not available')
                break;

        }
    }
}

module.exports = chooseIsAvailable