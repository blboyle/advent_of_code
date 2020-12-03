const {getInputArray} = require('../utilities.js')

// Day 2 - a
getInputArray()
    .then(data => validPasswordCount(data, "original"))
    .then(validity => console.log(validity))
    .catch(err => console.log(err))

    // Day 2 - a
getInputArray()
    // .then(data => validPasswordCount([data[0], data[1], data[2]], "new"))
    .then(data => validPasswordCount(data, "new"))
    .then(validity => console.log(validity))


// Functions

function validPasswordCount(input, type) {

    let validPasswordCount = 0;

    input.forEach((item) => {
        if (passwordIsValid(item, type)){
            validPasswordCount++
        }
    })

    return validPasswordCount;
    
}

function passwordIsValid(item, type) {

    if (type === "original") {

        const [rule, password] = item.split(": ");
        const [counts, letter] = rule.split(" ");
        const [min,  max] = counts.split("-");
    
        const letterCount = createCount(password);
    
        if (letterCount[letter] >=  min && letterCount[letter] <= max) {
            return true;
        }

        return false;
    
    } 

    if (type == "new") {

        const [rule, password] = item.split(": ");
        const [locations, letter] = rule.split(" ");
        const [first,  second] = locations.split("-");

        console.log({
            rule, password, locations, first, second, letter
        })

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