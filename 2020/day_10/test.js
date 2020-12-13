const {findAnswer} = require('./script');

describe('day8', () => {

    describe('part a',  () => {

        test("example", async () => {
            const answer = await findAnswer(`test`);
            expect(answer[0]).toBe(7 * 5);``
        })

        test("example 2", async () => {
            const answer = await findAnswer(`test2`);
            expect(answer[0]).toBe(22 * 10);
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

        test("example", async () => {
            const answer = await findAnswer(`test2`);
            expect(answer[1]).toBe(19208);
        })

        test("real", async () => {
            const answer = await findAnswer(``);
            expect(answer[1]).toBe(56693912375296);
        })

        test("real no 140737488355328", async () => {
            const answer = await findAnswer(``);
            expect(answer[1]).not.toBe(140737488355328);
        })

    });


});