const {whatIsAccumulator} = require('./script');

describe('day8', () => {

    describe('part a',  () => {


        test("example", async () => {
            const answer = await whatIsAccumulator(`test`);
            expect(answer[0]).toBe(5);
        })

        test("real", async () => {
            const answer = await whatIsAccumulator(``);
            expect(answer[0]).toBe(1420);
        })


    })

    describe('part b', () => {

        test("example", async () => {
            const answer = await whatIsAccumulator(`test`);
            expect(answer[1]).toBe(8);
        })

        test("real", async () => {
            const answer = await whatIsAccumulator(``);
            expect(answer[1]).toBe(1245);
        })

    });


});