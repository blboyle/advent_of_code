const {getInputArray, numberSort} = require('../utilities.js')


let cardinals = ["N", "E", "S", "W"];
let directionIndex = 1;
let x = 0;
let y = 0;

let waypointX = 10;
let waypointY = 1;

let location = {
    direction: cardinals[directionIndex],
    location: [x,y]
}

let wayPointLocation = [waypointX, waypointY];

const reset = () => {
    directionIndex = 1;
    x = 0;
    y = 0;
    waypointX = 10;
    waypointY = 1;

}

const findAnswer = async (path) => {

    reset();

    const data = await getInputArray(`${__dirname}/${path}`);
    const directions = makeDirections(data);
    const endLocation = useDirections(directions);

    const answer = Math.abs(endLocation[0]) + Math.abs(endLocation[1]);

    reset();

    const waypointInfo = withWaypoint(directions);

    const secondAnswer = Math.abs(waypointInfo[0]) + Math.abs(waypointInfo[1]);
 
    return [answer, secondAnswer];

}

const withWaypoint = directions => {
    directions.forEach(direction => {

        if (direction[0] == "R" || direction[0] == "L") {
            rotateWaypoint(direction)
        } else {
            moveWaypoint(direction);
        }
        
        update();
    })

    return location.location;
}

const rotateWaypoint = ([turn, amount]) => {

    let turns = amount / 90;

    if (turns > 3) {
        turns = turns % 4;
    }

    let tempX = waypointX;
    let tempY = waypointY;

    switch(turns){
        case 1:
            if (turn == "R") {
                waypointX = tempY;
                waypointY = -tempX;
            }
            if (turn == "L") {
                waypointX = -tempY;
                waypointY = tempX;
            }
            break;
        case 2:
            waypointX = -tempX;
            waypointY = -tempY;
            break;
        case 3:
            if (turn == "R") {
                waypointX = -tempY;
                waypointY = tempX;
            }
            if (turn == "L") {
                waypointX = tempY;
                waypointY = -tempX;
            }
            break;
    }

}

const moveWaypoint = ([direction, amount]) => {

    switch (direction){
        case "N":
            waypointY += Number(amount)
            break;
        case "E":
            waypointX += Number(amount)
            break;
        case "S":
            waypointY -= Number(amount)
            break;
        case "W":
            waypointX -= Number(amount)
            break;
        case "F":
            moveTowardWaypoint(amount);
            break;
    }

}

const moveTowardWaypoint = amount => {

    x = x + (wayPointLocation[0] * amount);
    y = y + (wayPointLocation[1] * amount);

}

const update = () => {
    location.direction = cardinals[directionIndex];
    location.location = [x,y];
    wayPointLocation = [waypointX,waypointY];
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

    let moves = (amount / 90);

    if (turn == "R") {
        directionIndex = directionIndex + moves;
    }

    if (turn == "L") {
        directionIndex -= moves;
    }

    if (directionIndex < 0) {
        directionIndex += 4;
    }

    if (directionIndex > 3) {
        directionIndex -= 4;
    }

}

const makeDirections = data => {
    return data.map(item => (
        [item.substr(0, 1), item.substr(1)]
    ))
}



// const run = async () => {
//     const answer = await findAnswer(``);
//     console.log(answer);
// }

// run();

module.exports = {
    findAnswer
};