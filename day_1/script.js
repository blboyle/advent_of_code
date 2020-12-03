const fs = require('fs');

async function getInputArray()  {
    const input = await fs.readFileSync('./input.txt', {
        encoding: 'utf-8'
    });
    return input.split("\n");
}

function findPair(array){

    const year = 2020;
    let pair;

    array.forEach((year1, _, data) => {
        data.forEach((year2) => {
            if (Number(year1) + Number(year2) == year) {
                pair = [year1, year2]
            }
        })
    })

    return pair;
}

function findThree(array){

    const year = 2020;
    let group;

    array.forEach((year1, _, data) => {
        data.forEach((year2, _, dataTwo) => {
            data.forEach((year3) => {
                if (Number(year1) + Number(year2) + Number(year3)== year) {
                    group = [year1, year2,  year3]
                }
            })
        })
    })

    return group;
}

function findProductTwo(array){
    if (array.length != 2) {
        throw new Error("This is not hte right length o f array. Must be 2")
    }
    return array[0] *  array[1];
}


function findProductThree(array){
    if ( array.length != 3) {
        throw new Error("This is not hte right length o f array. Must be three")
    }
    return array[0] *  array[1] * array[2];
}

// Part A
getInputArray()
    .then(data => findPair(data))
    .then(years => findProductTwo(years))
    .then(product => console.log(product))

    // Part A
getInputArray()
    .then(data => findThree(data))
    .then(years => findProductThree(years))
    .then(product => console.log(product))