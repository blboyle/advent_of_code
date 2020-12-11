const {getInputArray} = require('../utilities.js')


const findAnswer = async (path, preambleSize) => {

    const data = await getInputArray(`${__dirname}/${path}`);
    const answer = findFirstOutlier(data,  preambleSize);
    const weakness = findEncryptionWeakness(data, answer)


    return [answer, weakness];

}

const findEncryptionWeakness = (data, answer) => {
    const list = findContiguousList(data, answer);
    const sorted = list.sort();

    console.log(sorted);

    return parseInt(sorted[0]) + parseInt(sorted[sorted.length - 1]);
}

const findContiguousList = (data, answer) => {

    let pointer = 0;
    let reached = false;

    // console.log("---")

    while(pointer < data.length && !reached) {

        let count = Number(data[pointer]);
        let subPointer = pointer;
        let list = [];

        while (count <= answer) {

            if (count == answer) {
                // console.log('hi')
                reached = true;
                break;
            }

            // console.log({count, answer});
            list.push(Number(data[subPointer]))
            count = count + Number(data[++subPointer]);

        }

        if (reached) {
            return list;
        }

        pointer++
    }

}

const findFirstOutlier = (data, preambleSize) => {

    let outlierNumber = 0;

    for(i = preambleSize; i < data.length; i++) {

        let preamble = data.slice(i-preambleSize, i)
        let number = data[i];
        let outlier = true;

        preamble.forEach((item)=>{
            preamble.forEach((item2)=>{
                if (item2 !== item) {
                    const sum = parseInt(item) + parseInt(item2);
                    if (sum == number) {
                        outlier = false;
                    }
                }
            })
        })

        if(outlier){
            outlierNumber = data[i];
        }
    }

    return Number(outlierNumber);
}

const run = async () => {
    const answer = await findAnswer(``, 25);
    console.log(answer);
}

run();

module.exports = {
    findAnswer
};