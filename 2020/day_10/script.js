const {getInputArray, numberSort} = require('../utilities.js')

const findAnswer = async (path) => {

    const data = await getInputArray(`${__dirname}/${path}`);
    const joltages = makeJoltates(data);
    const list = findDifferences(joltages);
    const answer = mutiplyOneAndThree(list);
    const totalPossibilities = totalIterations(joltages);


    console.log({joltages});

    return [answer, totalPossibilities];

}

const countRemovables = joltages => {
    return joltages.map((joltage,i,entries) => {
        if (entries[i+1]){
            const difference = entries[i+1] - entries[i];

            if (difference == 1 && entries[i+2]) {
                const secondDifference = entries[i+2] - entries[i+1];
                if (secondDifference == 1) {
                    return true;
                }
            }

            // console.log({joltage, difference})
        }
        return false
    })
}

const totalIterations = joltages => {
    
    const removables = countRemovables(joltages);
    const amount = removables.filter(entry => entry);

    return 2 ** amount.length;

}

const findDifferences = (joltages) => (
    [outletJoltage = 0,...joltages]
        .map((_, i, entries) => {
            if (i < entries.length - 1){
                return entries[i+1] - entries[i];
            }
            return 3;
        })
        .reduce((list, difference) => {
            list[difference-1]++
            return list;
        }, [0,0,0])
)

const makeJoltates = data => data.map(point => Number(point)).sort(numberSort)

const mutiplyOneAndThree = (list)  => {
    console.log(list);
    return list[0] * list[2];
}

const run = async () => {
    const answer = await findAnswer(`test`);
    console.log(answer);
}

run();

module.exports = {
    findAnswer
};