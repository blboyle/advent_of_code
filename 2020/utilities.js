const fs = require('fs');

async function getInputArray(path = "")  {
    const input = await fs.readFileSync(`${path}input.txt`, {
        encoding: 'utf-8'
    });
    return input.split("\n");
}

function numberSort(a,b) {
    if (a < b){
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0;
}

module.exports = {
    getInputArray,
    numberSort
}