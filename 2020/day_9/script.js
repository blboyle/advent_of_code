const {getInputArray} = require('../utilities.js')


const findAnswer = async (path, preambleSize) => {

    const data = await getInputArray(`${__dirname}/${path}`);
    const answer = findFirstOutlier(data,  preambleSize);


    return [answer,];

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
    const answer = await findAnswer(`test`, 5);
    console.log(answer);
}

// run();

module.exports = {
    findAnswer
};