const {findAnswer} = require('./script');

describe('day12', () => {

    describe('part a',  () => {

        test("example", async () => {
            const answer = await findAnswer(`test`);
            expect(answer[0]).toBe(25);
        }) 

        test("real not 1461", async () => {
            const answer = await findAnswer(``);
            expect(answer[0]).not.toBe(1461);
        })

        test("real not 731", async () => {
            const answer = await findAnswer(``);
            expect(answer[0]).not.toBe(731);
        })
        
        
        test("real not 599", async () => {
            const answer = await findAnswer(``);
            expect(answer[0]).not.toBe(599);
        })

        test("real not 230", async () => {
            const answer = await findAnswer(``);
            expect(answer[0]).not.toBe(230);
        })

        test("real", async () => {
            const answer = await findAnswer(``);
            expect(answer[0]).toBe(1496);
        })

    })

    describe('part b', () => {

        test("example", async () => {
            const answer = await findAnswer(`test`);
            expect(answer[1]).toBe(286);
        })


        test("real not 72485", async () => {
            const answer = await findAnswer(``);
            expect(answer[1]).not.toBe(72485);
        })


        test("real", async () => {
            const answer = await findAnswer(``);
            expect(answer[1]).toBe(63843);
        })


        
    });


});