const {findAnswer} = require('./script');

describe('day8', () => {

    describe('part a',  () => {

        test.only("example", async () => {
            const answer = await findAnswer(`test`);
            expect(answer[0]).toBe(7 * 5);``
        })

        test.only("example 664", async () => {
            const answer = await findAnswer(`test`);
            expect(answer[0]).not.toBe(664);``
        })

        test.only("example 2330", async () => {
            const answer = await findAnswer(`test`);
            expect(answer[0]).not.toBe(2330);``
        })

        test("real", async () => {
            const answer = await findAnswer(``);
            expect(answer[0]).toBe(1656);
        })

        

    })

    describe('part b', () => {

        test("example", async () => {
            const answer = await findAnswer(`test`);
            expect(answer[1]).toBe(8);
        })


        test("real", async () => {
            const answer = await findAnswer(``);
            expect(answer[1]).toBe(56693912375296);
        })

    });


});