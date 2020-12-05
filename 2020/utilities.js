const fs = require('fs');

async function getInputArray(test = "")  {
    const input = await fs.readFileSync(`./${test}input.txt`, {
        encoding: 'utf-8'
    });
    return input.split("\n");
}

module.exports = {
    getInputArray
}