const myAddress = {
    streetNumber: 525,
    streetName: "Solomon Drive",
    city: "Columbia City",
    state: "Indiana",
    zip: 46725
};

// const streetNumber = myAddress.streetNumber
// const city = myAddress.city

const {streetNumber, city} = myAddress // take out the variables you want and make it equal to the variable
// have to match exactly

const {streetNumber: streetNum, city} //you can shorten the name of the variable by using a colon
console.log(streetNumber, city);

//you want to get to the email - req.body.email.user and store that in an email
const req = {
    body: {
        user: {
            email: "rose@mary.com",
            password: "flowers247",
        },
    },
};

const {email, password} = req.body.user //go to the email and go one step back
console.log(email, password);