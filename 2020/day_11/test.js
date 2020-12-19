const {findAnswer} = require('./script');

describe('day11', () => {

    describe('part a',  () => {

        test("example", async () => {
            const answer = await findAnswer(`test`);
            expect(answer[0]).toBe(37);
        })


        test("real", async () => {
            const answer = await findAnswer(``);
            expect(answer[0]).toBe(2424);
        })


    })

    describe('part b', () => {

        test("example", async () => {
            const answer = await findAnswer(`test`, 2);
            expect(answer[0]).toBe(26);
        })


        test("real", async () => {
            const answer = await findAnswer(``, 2);
            expect(answer[0]).toBe(2208);
        })

    });


});