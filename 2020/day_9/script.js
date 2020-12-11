const {getInputArray} = require('../utilities.js')


const findAnswer = async (path, preambleSize) => {

    const data = await getInputArray(`${__dirname}/${path}`);
    const answer = findFirstOutlier(data,  preambleSize);
    const weakness = findEncryptionWeakness(data, answer)


    return [answer, weakness];

}

const findEncryptionWeakness = (data, answer) => {
    const list = findContiguousList(data, answer);
    console.log({list});
    const sorted = list.sort((a,b) => {
        if(a>b){
            return -1
        } else {
            return 1;
        }
    });

    console.log({sorted});

    console.log([parseInt(sorted[0]), parseInt(sorted[sorted.length - 1])])

    return parseInt(sorted[0]) + parseInt(sorted[sorted.length - 1]);
}

const findContiguousList = (data, answer) => {

    let pointer = 0;
    let reached = false;

    // console.log("---")

    while(pointer < data.length && !reached) {

        // console.log("----")

        let count = Number(data[pointer]);
        let subPointer = pointer;
        let list = [Number(data[pointer])];

        while (count <= answer) {

            subPointer++

            list.push(Number(data[subPointer]))
            count = count + Number(data[subPointer]);

        
            if (count == answer) {
                console.log( {list: list.reduce((a,b) => a + b,0)})
                console.log({count, answer})
                return list;
            }

           

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