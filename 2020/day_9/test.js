const {findAnswer} = require('./script');

describe('day9', () => {

    describe('part a',  () => {


        test("example", async () => {
            const answer = await findAnswer(`test`, 5);
            expect(answer[0]).toBe(127);
        })

        test("real", async () => {
            const answer = await findAnswer(``, 25);
            expect(answer[0]).toBe(1930745883);
        })


    })

    describe('part b', () => {

        test("example", async () => {
            const answer = await findAnswer(`test`, 5);
            expect(answer[1]).toBe(62);
        })

        test("real", async () => {
            const answer = await findAnswer(``, 25);
            expect(answer[1]).toBe(268878261);
        })


        test("real avoid 200682420", async () => {
            const answer = await findAnswer(``, 25);
            expect(answer[1]).not.toBe(200682420);
        })

    });


});