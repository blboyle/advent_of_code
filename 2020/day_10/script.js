const {getInputArray, numberSort} = require('../utilities.js')

const findAnswer = async (path) => {

    const data = await getInputArray(`${__dirname}/${path}`);
    const joltages = makeJoltates(data);
    const list = findDifferences(joltages);
    const answer = mutiplyOneAndThree(list);
    const totalPossibilities = totalIterations(joltages);


    // console.log({joltages});

    return [answer, totalPossibilities];

}

const countRemovables = joltages => {
    const differences = [outletJoltage = 0,...joltages]
        .map((_, i, entries) => {
            if (i < entries.length - 1){
                return entries[i+1] - entries[i];
            }
            return 3;
    });

    const counts = [0,0,0];

    // console.log(differences);

    differences.forEach((_,i, entries) => {
        if (
            entries[i] == 3 && 
            entries[i-1] && entries[i-1] == 1 && 
            entries[i-2] && entries[i-2] == 1
        ) {
            if (entries[i-3] && entries[i-3] ==1) {
                if (entries[i-4] && entries[i-4] ==1) {
                    // console.log('three')
                        counts[0]++
                        return;     
                    }
                    // console.log('two')
                counts[1]++
                return;
            }
            // console.log('one')
            counts[2]++
            return;
        }
    })


    return   (7 ** counts[0]) * (4 ** counts[1]) * (2 ** counts[2]);
}

const totalIterations = joltages => {
    
    const removables = countRemovables(joltages);
    // const amount = removables.filter(entry => entry);

    return removables;

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
    // console.log(list);
    return list[0] * list[2];
}

// const run = async () => {
//     const answer = await findAnswer(``);
//     // console.log(answer);
// }

// run();

module.exports = {
    findAnswer
};