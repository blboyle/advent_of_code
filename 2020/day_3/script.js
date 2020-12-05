const {getInputArray} = require('../utilities.js')

// Day 3 - a
getInputArray()
    .then(data => countTrees(data, [3,1]))
    .then(answer => console.log(answer))
    .catch(err => console.log(err))

// Day 3 - b

const slopes = [
    [1,1], [3,1], [5,1], [7,1], [1,2]
]

getInputArray()
    .then(data => countTreesForSlopes(data, slopes))
    .then(counts => counts.reduce((previous, current) => previous * current))
    .then(answer => console.log(answer))
    .catch(err => console.log(err))

function countTreesForSlopes(data, slopes)  {
    return slopes.map(slope => countTrees(data, slope))
}

function countTrees(data,  slope) {

    const location = [0,0];
    let treeCount = 0;

    while (location[1] < data.length) {

        const latitude = location[1];
        const longitude = location[0] % data[0].length;

        const item = data[latitude][longitude];
        location[0] = location[0] + slope[0];
        location[1] = location[1] + slope[1];

        if  (item === "#") {
            treeCount++
        }   
    }

    return treeCount;
}
