const {getInputArray} = require('../utilities.js')

const seatId = ([row, column]) => row * 8 + column;

const row = code => {

    const rowCode = code.slice(0,7);

    let size = 128;
    let row = 1;

    rowCode.split("").forEach(letter => {
        if (letter == "B") {
            row = row + (size/2);
        }
        size = size / 2;
    })

    return row - 1;

};

const column = code => {
    const columnCode = code.slice(7);

    let size = 8;
    let seat = 1;

    columnCode.split("").forEach(letter => {
        if (letter == "R") {
            seat = seat + (size/2);
        }
        size = size / 2;
    })

    return seat - 1;
}

const answer = async () => {

    const data = await getInputArray(`${__dirname}/`);

    const [answer] = data.map(code => {
        const columnValue = column(code);
        const rowValue = row(code);
        return seatId([rowValue, columnValue]);
    }).sort((a,b)=> b-a);

    return answer;

};

module.exports = {
    answer,
    seatId,
    column,
    row
};