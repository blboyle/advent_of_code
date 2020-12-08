const {getInputArray} = require('../utilities.js')

let listOfBagTypes;
let bagAssociation;
let reachableFrom = [];

const howManyBags = async (needle, path) => {

    const data = await getInputArray(`${__dirname}/${path}`);
    listOfBagTypes = typesOfBags(data)
    bagAssociation = buildBagAssociation(data);

    return countPossibleBags(needle);
}

const countPossibleBags = (needle) => {

    const needleIndex = listOfBagTypes.indexOf(needle);

    const checks = bagAssociation.map((_, i) => {

        if (i < 200000){
            return canIReach(needleIndex, i);
        }

    });

    const answer = checks.filter((item) => item);

    console.log(reachableFrom);

    return answer.length;

}

const canIReach = (needle, i) => {

    if (needle == i) {
        return false;
    }

    let bagsToCheck = [i];
    let checkedBags = [];
    let reachable = false;

    console.log('---', i)

    while (bagsToCheck.length > 0) {
        const bag = bagsToCheck.shift();
 
        for (item of bagAssociation[bag]) {
            if (!checkedBags.includes(item)) {
                bagsToCheck.push(item);
            }
        }
        
        if (bagAssociation[bag].includes(needle) || reachableFrom.includes(bag)) {
            console.log(">>>");
            bagsToCheck = [];
            reachable = true;
        }

        checkedBags.push(bag);

    }

    if (reachable) {
        reachableFrom.push(i);
    }

    return reachable;

}


const buildBagAssociation = (data) => data.map((rule) => {

    const children = listOfBagTypes.map((type) => {
        const regex = `${type}`;
        const child = rule.match(regex);
        if (child){
            return child[0];
        }
    }).filter((item) => item != null).splice(1);

    return getBagIndexOf(children);

});

const getBagIndexOf = (bagNames) => bagNames.map((item) => listOfBagTypes.indexOf(item))

const typesOfBags = (data) => data.map((rule) => rule.match(/(.+) bags contain/)[1]);

const run = async () => {
    const answer = await howManyBags('shiny gold', 'test');
    console.log(answer);
}

run();

module.exports = {
    howManyBags
};