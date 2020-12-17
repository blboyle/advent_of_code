const {getInputArray, numberSort} = require('../utilities.js')

let directionIndex = 1;
let x = 0;
let y = 0;
let directions = ["N", "E", "S", "W"];

let location = {
    direction: directions[directionIndex],
    location: [x,y]
}

const findAnswer = async (path) => {

    const data = await getInputArray(`${__dirname}/${path}`);
    const directions = makeDirections(data);
    const endLocation = useDirections(directions);

    const answer = Math.abs(endLocation[0]) + Math.abs(endLocation[1]);
    console.log(answer);
 
    return [answer];

}

const update = () => {
    location.direction = directions[directionIndex];
    location.location = [x,y];
}

const useDirections = directions => {
    directions.forEach(direction => {
        if (direction[0] == "R" || direction[0] == "L") {
            faceDirection(direction)
        } else {
            moveDirection(direction);
        }
        update();
    })

    console.log(location)

    return [x,y];
   
}

const moveDirection = ([direction, amount])  => {

    switch (direction){
        case "N":
            y += Number(amount)
            break;
        case "E":
            x += Number(amount)
            break;
        case "S":
            y -= Number(amount)
            break;
        case "W":
            x -= Number(amount)
            break;
        case "F":
            moveDirection([location.direction,amount])
            break;
    }

}

const faceDirection = ([turn, amount]) => {

    let moves = (amount % 90) + 1;

    if (turn == "R") {
        directionIndex = directionIndex + moves;
    }

    if (turn == "L") {
        directionIndex -= moves;
    }


}

const makeDirections = data => {
    return data.map(item => [item.substr(0, 1), item.substr(1)])
}



const run = async () => {
    const answer = await findAnswer(``);
    console.log(answer);
}

run();

module.exports = {
    findAnswer
};