const fs = require('fs');

async function getInputArray(path = "")  {
    const input = await fs.readFileSync(`${path}input.txt`, {
        encoding: 'utf-8'
    });
    return input.split("\n");
}

module.exports = {
    getInputArray
}