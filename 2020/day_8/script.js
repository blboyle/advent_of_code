const {getInputArray} = require('../utilities.js')


const whatIsAccumulator = async (path) => {

    const data = await getInputArray(`${__dirname}/${path}`);
    const instructions = createInstructions(data);
    const accumulator = runProgram(instructions);
    const accumulatorAgain = runProgramAgain(instructions);

    return [accumulator, accumulatorAgain];
}

const runProgram = (instructions) => {

    let pointer = 0;
    let accValue = 0;
    let breakLoop = false;
    let ran = [];

    while (true) {

        if (ran.includes(pointer)){
            break;
        }
        
        ran.push(pointer);

        let instruction = instructions[pointer];

        if (instruction[0] == "nop"){
            pointer++
        }
        
        if (instruction[0] == "jmp") {
            pointer = pointer + instruction[1]
        }

        if (instruction[0] == "acc") {
            pointer++
            accValue = accValue + instruction[1]
        }

    }


    return accValue;
}

const runProgramAgain = (instructions) => {

    const changeables = instructions.map((instruction, i) => {
        if (instruction[0] == "nop" || instruction[0] == "jmp") {
            return i;
        }
    }).filter(data => data !== undefined);

    const attempts = changeables.map((changeable, i) => {

        const newInstructions = instructions;

        if (newInstructions[changeable][0] == "nop") {
            newInstructions[changeable][0] = "jmp";
        } else if (newInstructions[changeable][0] == "jmp")  {
            newInstructions[changeable][0] = "nop";
        }

        let pointer = 0;
        let accValue = 0;
        let count = 0;


        while (pointer < newInstructions.length && count < 50000) {
            count++;

            let newInstruction = newInstructions[pointer];

            if (newInstruction[0] == "nop"){
                pointer++
            }
            
            if (newInstruction[0] == "jmp") {
                pointer = pointer + newInstruction[1]
            }
    
            if (newInstruction[0] == "acc") {
                pointer++
                accValue = accValue + newInstruction[1]
            }

        }

        if (newInstructions[changeable][0] == "nop") {
            newInstructions[changeable][0] = "jmp";
        } else if (newInstructions[changeable][0] == "jmp")  {
            newInstructions[changeable][0] = "nop";
        }

        if (count < 50000) {
            return accValue;
        }

    }).filter(data => data !== undefined);

    return attempts[0];
}

const createInstructions = (data) => {

    return data.map((dataPoint) => {
        const code = dataPoint.split(" ")[0];
        const input = parseInt(dataPoint.split(" ")[1]);
        return [code, input];
    })

}


const run = async () => {
    const answer = await whatIsAccumulator(`test`);
    console.log(answer);
}

run();

module.exports = {
    whatIsAccumulator
};