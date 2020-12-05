const {getInputArray} = require('../utilities.js')

const seatId = (row, column) => row * 8 + column;

const trackLocation = ({
    locationCode,
    size,
    largerLetter,
}) => {

    let location = 1;

    locationCode.split("").forEach(letter => {
        if (letter == largerLetter) {
            location = location + (size/2);
        }
        size = size / 2;
    })

    return location - 1;

}

const row = code => trackLocation({
    locationCode: code.slice(0,7), 
    size: 128, 
    largerLetter: "B"
});

const column = code => trackLocation({
    locationCode: code.slice(7), 
    size: 8, 
    largerLetter: "R"
});


const getListOfIdSorted =  async () => {
    const data = await getInputArray(`${__dirname}/`);

    return data.map(code => {
        const columnValue = column(code);
        const rowValue = row(code);
        return seatId(rowValue, columnValue);
    }).sort((a,b)=> b-a);
}

const highestNumber = async () => {

    const [answer] = await getListOfIdSorted();

    return answer;

};

const missing = async () => {

    const listOfIdsArray = await getListOfIdSorted();
    let mySeatId = 0;

    listOfIdsArray.forEach(id => {
        if (!listOfIdsArray.includes(id+1)) {
            mySeatId = id + 1;
        }
    })

    return mySeatId;
  
}

missing();

module.exports = {
    highestNumber,
    seatId,
    column,
    row,
    missing
};