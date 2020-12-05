const {getInputArray} = require('../utilities.js')


// Part A
getInputArray()
    .then(data => findPair(data))
    .then(years => years.reduce((prev, current) => prev * current))
    .then(answer => console.log(answer))

// Part B
getInputArray()
    .then(data => findThree(data))
    .then(years => years.reduce((prev, current) => prev * current))
    .then(answer => console.log(answer))

const YEAR = 2020;

function findPair(array){

    let pair;

    array.forEach((year1, _, data) => {
        data.forEach((year2) => {
            if (Number(year1) + Number(year2) == YEAR) {
                pair = [year1, year2]
            }
        })
    })

    return pair;
}

function findThree(data){

    let group;

    data.forEach(year1 => {
        data.forEach(year2 => {
            data.forEach(year3 => {
                if (Number(year1) + Number(year2) + Number(year3) == YEAR) {
                    group = [year1, year2, year3]
                }
            })
        })
    })

    return group;
}