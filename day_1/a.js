const fs = require('fs');

async function getInputArray()  {
    const input = await fs.readFileSync('./input.txt', {
        encoding: 'utf-8'
    });
    return input.split("\n");
}

getInputArray()
    .then(data => findPair(data))
    .then(years => findProduct(years))
    .then(product => console.log(product))

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

function findProduct(array){
    return array[0] *  array[1];
}