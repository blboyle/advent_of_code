const {getInputArray} = require('../utilities.js')

const formatData = async (path = "") => {
    const data = await getInputArray(`${__dirname}/${path}`);
    const groupInfo = [];
    let groupArray = [];

    data.forEach((item) => {
        if (item == "") {
            groupInfo.push(groupArray);
            groupArray = [];
        }  else {
            groupArray.push(item);
        }

    });

    groupInfo.push(groupArray);

    return groupInfo;
}

const countGroupAll = (groupInfo) => groupInfo.map(group => {

    let letterArray = [];

    group.forEach(item => {

        item.split("").forEach(letter => {
            if (!letterArray.includes(letter)) {
                letterArray.push(letter);
            } 
        })

    });

    return letterArray.length;

}).reduce((total, current) => total + current, 0);


const countGroupSpecific = (groupInfo) => groupInfo.map(group => {

    const groupLength = group.length;
    const letterObject = {};

    group.forEach(item => {
        item.split("").forEach((letter) => {
            if (letterObject[letter]) {
                letterObject[letter]++
            } else {
                letterObject[letter] = 1
            }
        })
    })

    const letters = Object.keys(letterObject).filter((letter) => {
        return letterObject[letter] == groupLength;
    })

    return letters.length;

}).reduce((total, current) => total + current, 0);

module.exports = {
    formatData,
    countGroupAll,
    countGroupSpecific
};