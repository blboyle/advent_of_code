const {findAnswer} = require('./script');

describe('day8', () => {

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

    describe.skip('part b', () => {

        test("example", async () => {
            const answer = await v(`test`);
            expect(answer[1]).toBe(8);
        })

        test("real", async () => {
            const answer = await v(``);
            expect(answer[1]).toBe(1245);
        })

    });


});