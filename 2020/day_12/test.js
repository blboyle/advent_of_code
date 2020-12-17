const {findAnswer} = require('./script');

describe('day8', () => {

    describe.only('part a',  () => {

        test("example", async () => {
            const answer = await findAnswer(`test`);
            expect(answer[0]).toBe(25);
        })

        test("real", async () => {
            const answer = await findAnswer(``);
            expect(answer[0]).toBe(230);
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