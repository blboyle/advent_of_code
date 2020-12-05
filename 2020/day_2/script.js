const {getInputArray} = require('../utilities.js')

// Day 2 - a
getInputArray()
    .then(data => validPasswordCount(data, "original"))
    .then(answer => {
        if ( answer == 636) {
            console.log("636! Winner!")
        }else {
            console.log(answer, "Oops")
        }
    })
    .catch(err => console.log(err))

    // Day 2 - a
getInputArray()
    .then(data => validPasswordCount(data, "new"))
    .then(answer => {
        if (answer == 588) {
            console.log("588! Winner!")
        } else {
            console.log(answer, "Oops")
        }
    })
    .catch(err => console.log(err))


// Functions

const validPasswordCount = (input, type) => (
    input.reduce((total, current) => (
        total + Number(passwordIsValid(current, type))
    ), 0)
)

function passwordIsValid(item, type) {

    if (type === "original") {

        const [rule, password] = item.split(": ");
        const [counts, letter] = rule.split(" ");
        const [min, max] = counts.split("-");
    
        const letterCount = createCount(password);
    
        if (letterCount[letter] >=  min && letterCount[letter] <= max) {
            return true;
        }

        return false;
    
    } 

    if (type == "new") {

        const [rule, password] = item.split(": ");
        const [locations, letter] = rule.split(" ");
        const [first, second] = locations.split("-");

        if (password[first - 1] == letter && password[second - 1] == letter) {
            return false;
        }
    
        if (password[first - 1] == letter || password[second - 1] == letter) {
            return true;
        }
        
        return false;

    }

    throw new Error("Please select a password rule type");

}

function createCount(password) {

    let countObject = {};

    password.split("").forEach((letter) => {
        if (countObject[letter]) {
            countObject[letter]++
        } else {
            countObject[letter] = 1
        }
    })

    return countObject;

}