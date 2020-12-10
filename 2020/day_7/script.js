const {getInputArray} = require('../utilities.js')

let listOfBagTypes;
let listOfBags;

const howManyBags = async (needle, path) => {

    const data = await getInputArray(`${__dirname}/${path}`);
    listOfBags = formatBags(data)
    count = countPossibleBags(needle);
    total = countTotalNumber(needle);

    return [count,total];
}

const countPossibleBags = (needle) => {

    const foundColours = listOfBags
        .filter((bag) => bag.children)
        .filter((bag) => bag.name !== needle)
        .filter((bag) => {
            return bag.children.some((child) => {
                return child.name == needle;
            })
        });

    const all =  [
        ...foundColours,
        ...foundColours.map((bag) => {
            return countPossibleBags(bag["name"])
        }).flat()
    ]
    .filter((value, index, array) => {
        return array.indexOf(value) === index;
    });


    return all.length;

}

const countTotalNumber = (needle) => {

    const foundBag = listOfBags
        .find(bag => {
            return bag.name == needle;
        })

    console.log({foundBag});

    if (foundBag.children.length === 0) {
        return 1;
      }
    
    
    return foundBag.children.reduce((sum, child) => {
        console.log({child},parseInt(child.number, 10))
        return sum + parseInt(child.number, 10) * countTotalNumber(child.name);
    }, 1);
}



const formatBags = (data) => data.map((rule) => {

    const name = rule.match(/(.+) bags contain/)[1]
    const availableColors = rule.split(' bags contain ')[1]
        .replace('.', '')
        .replace(' bags', '')
        .split(', ');
    
    
    return {
        name,
        children:  availableColors
            .filter((color) => color !== 'no other')
            .map((color) => ({
                number: color.split(' ')[0],
                name: color.split(' ')[1] + ' ' + color.split(' ')[2],
            })),

    }
}).filter(bag => bag.children !== null);

const getBagIndexOf = (bagNames) => bagNames.map((item) => listOfBagTypes.indexOf(item))

const typesOfBags = (data) => data.map((rule) => rule.match(/(.+) bags contain/)[1]);

const run = async () => {
    const answer = await howManyBags('shiny gold', '');
    console.log(answer);
}

run();

module.exports = {
    howManyBags
};