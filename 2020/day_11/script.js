const {getInputArray, numberSort} = require('../utilities.js')

let map;
let tempMap;

const findAnswer = async (path) => {

    const premap = await getInputArray(`${__dirname}/${path}`);
    map = createMap(premap);

    const pretty2 = prettyMap(map);
    // console.log(pretty2);

    loopSeatings(map);
   
    const answer = countSeats();

    const pretty = prettyMap(map);

    console.log(pretty);

    return [answer];

}

const countChanges = () => {
    // console.log({map, tempMap})

    let count = 0;

    map.forEach((row, i) => {
        row.forEach((_,j) => {
            if(map[j][i] !== tempMap[j][i]) {
                count++;
            }
        })
    })

    console.log(count);
    return count;

}

const countSeats = () => {
    // console.log('counting');
    let count = 0;
    map.forEach((row, i) => {
        row.forEach((_,j) => {
            if(map[j][i] == "#") {
                count++;
            }
        })
    })
    return count;
}

const loopSeatings = () => {

    let differences = 1;

    while (differences) {
        console.log("---")
        tempMap = [];
        setSeating();

        differences = countChanges();
        map = tempMap;

        const pretty = prettyMap(map);

        console.log(pretty);

    }

}

const setSeating = () => {
    map.forEach((row, i) => {
        row.forEach((_,j) => {
            // console.log(j,i)
            setLocation([j,i]);
        })
    })
}



const setLocation = ([x,y]) => {

    if (x == 0) {
        tempMap[y] = [];
    }
    const surroundingsCount = findSurroundings([x,y]);

    if (map[y][x] == "L" && surroundingsCount[2] == 0) {
        tempMap[y][x] = "#";
        return;
    }

    if (map[y][x] == "#" && surroundingsCount[2] > 3) {
        tempMap[y][x] = "L";
        return;
    }

    tempMap[y][x] = map[y][x]; 

}

const prettyMap = (map) => {
    return map.map(row => row.join("")).join('\n');
}

const createMap = premap => {
    return premap.map((row) => {
        return row.split("");
    })
}

const findSurroundings = ([x,y]) => {

    let surrounds = [0,0,0];

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (i !== 0 || j !== 0) {

                if (map && map[y+i]) {

                    let value = map[y+i][x+j];

                    if (value == "L") {
                        surrounds[0]++
                    }

                    if (value == ".") {
                        surrounds[1]++
                    }

                    if (value == "#") {
                        surrounds[2]++
                    }

                } 

            }
        }
    }

    return surrounds;

}


const run = async () => {
    const answer = await findAnswer(``);
    console.log(answer);
}

run();

module.exports = {
    findAnswer
};