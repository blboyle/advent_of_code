const fs = require('fs');

async function getInputArray()  {
    const input = await fs.readFileSync('./input.txt', {
        encoding: 'utf-8'
    });
    return input.split("\n");
}

module.exports = {
    getInputArray
}