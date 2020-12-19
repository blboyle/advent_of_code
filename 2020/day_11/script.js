const {getInputArray, numberSort} = require('../utilities.js')

let map;
let tempMap;

const findAnswer = async (path, q) => {

    const max = q == 2 ? 4 : 3;


    const premap = await getInputArray(`${__dirname}/${path}`);
    map = createMap(premap);

    const pretty2 = prettyMap(map);
    // console.log(pretty2);


    loopSeatings(max);
   
    const answer = countSeats();

    const pretty = prettyMap(map);

    // console.log(pretty);

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

    // console.log(count);
    return count;

}

const countSeats = () => {
    // console.log('counting');
    let count = 0;
    map.forEach((row, i) => {
        row.forEach((_,j) => {
            if(map[i][j] == "#") {
                count++;
            } 

        })
    })
    return count;
}

const loopSeatings = (max) => {

    let differences = 1;
    let count = 0;

    while (differences) {
        // console.log("---")
        tempMap = [];

        const pretty = prettyMap(map);
        // console.log(pretty);


        setSeating(max);

        differences = countChanges();
        // console.log(differences);
        map = tempMap;

       

        // if (count == 3000) {
        //     differences = 0;
        // }

        count++

      
        // console.log(differences);
        // console.log("---")

    }

}

const setSeating = max => {

    map.forEach((row, i) => {
        // console.log('--')
        // console.log({row})
        row.forEach((_,j) => {
            setLocation([j,i], max);
        })
    })

}



const setLocation = ([x,y], max) => {


    // console.log(map[y] == undefined)
    // console.log(y);

    if (x == 0) {
        tempMap[y] = [];
    }

    const surroundingsCount = max == 4 ? 
    findSurroundingsTwo([x,y]) : 
    findSurroundingsOne([x,y]);

    if (y == 0 ) {
        // console.log(map[y][x], surroundingsCount)
    }

    if (map[y][x] == "L" && surroundingsCount[2] == 0) {
        tempMap[y][x] = "#";
        return;
    }

    if (map[y][x] == "#" && surroundingsCount[2] > max) {
        tempMap[y][x] = "L";
        return;
    }

    tempMap[y][x] = map[y][x]; 

}

const prettyMap = map => map.map(row => row.join("")).join('\n');

const createMap = premap => premap.map((row) => row.split(""));

const findSurroundingsTwo = ([x,y]) => {

    // console.log("--")

    const directionsList = ["N","NE","E","SE","S","SW","W","NW"];

    let surrounds = [0,0,0];
    let directions = [];

    for(direction of directionsList) {

        switch(direction){
            case "N":
                for(let i = 1; i < map.length + 1; i++) {
                    if (map && map[y-i] && map[y-i][x]) {
                        [surrounds, seated] = addSurroundings(surrounds,  map[y-i][x])
                        if (seated) {
                            directions.push(direction);
                            break;
                        }
                    }
                }
                break
            case "NE":
                for(let i = 1; i < map.length + 1; i++) {
                    if (map && map[y-i] && map[y-i][x+i]) {
                        [surrounds, seated] = addSurroundings(surrounds,  map[y-i][x+i])
                        if (seated) {
                            directions.push(direction);
                            break;
                        }
                    }
                }
                break
            case "E":
                for(let i = 1; i < map.length + 1; i++) {
                    if (map && map[y] && map[y][x+i]) {
                        [surrounds, seated] = addSurroundings(surrounds,  map[y][x+i])
                        if (seated) {
                            directions.push(direction);
                            break;
                        }
                    }
                }
                break
            case "SE":
                for(let i = 1; i < map.length + 1; i++) {
                    if (map && map[y+i] && map[y+i][x+i]) {
                        [surrounds, seated] = addSurroundings(surrounds,  map[y+i][x+i])
                        if (seated) {
                            directions.push(direction);
                            break;
                        }
                    }
                }
                break
            case "S":
                for(let i = 1; i < map.length + 1; i++) {
                    if (map && map[y+i] && map[y+i][x]) {
                        [surrounds, seated] = addSurroundings(surrounds,  map[y+i][x])
                        if (seated) {
                            directions.push(direction);
                            break;
                        }
                    }
                }
                break
            case "SW":
                for(let i = 1; i < map.length + 1; i++) {
                    if (map && map[y+i] && map[y+i][x-i]) {
                        [surrounds, seated] = addSurroundings(surrounds,  map[y+i][x-i])
                        if (seated) {
                            directions.push(direction);
                            break;
                        }
                    }
                }
                break
            case "W":
                for(let i = 1; i < map.length + 1; i++) {
                    if (map && map[y] && map[y][x-i]) {
                        [surrounds, seated] = addSurroundings(surrounds,  map[y][x-i])
                        if (seated) {
                            directions.push(direction);
                            break;
                        }
                    }
                }
                break
            case "NW":
                for(let i = 1; i < map.length; i++) {
                    if (map && map[y-i] && map[y-i][x-i]) {
                        [surrounds, seated] = addSurroundings(surrounds,  map[y-i][x-i])
                        if (seated) {
                            directions.push(direction);
                            break;
                        }
                    }
                }
                break
        }
    }

    // console.log(map[y][x],x,y,directions);



    return surrounds;


};

const addSurroundings = (surrounds, location) => {
    // console.log("there", i,j);

    // console.log(map[y+i][x+j])

    let value = location;
    let seated = false;

    // console.log({i,j});

    if (value == "L") {
        seated = true;
        surrounds[0]++
    }

    if (value == ".") {
        surrounds[1]++
    }

    if (value == "#") {
        surrounds[2]++
        seated = true;
    }

    return [surrounds, seated];
}

const findSurroundingsOne = ([x,y]) => {

    let surrounds = [0,0,0];

    let height = 1;
    let width = 1;

    // console.log('--')

    // console.log({height,width})

    for (let i = -height; i < height + 1; i++) {

        for (let j = -width; j < width + 1; j++) {

            if (i !== 0 || j !== 0) {

                // console.log(x,y)

                if (Math.abs(i) == Math.abs(j) || i == 0 || j == 0) {

                    // console.log("here",i,j);

                    if (map && map[y+i] && map[y+i][x+j]) {

                        [surrounds, seated] = addSurroundings(surrounds, map[y+i][x+j])

                    } 

                }

            }

        }

    }

    // console.log(x,y, surrounds);

    return surrounds;

}


// const run = async () => {
//     const answer = await findAnswer(`test`, 2);
//     console.log(answer);
// }

// run();

module.exports = {
    findAnswer
};