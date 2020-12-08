const {howManyBags} = require('./script');

describe('day7', () => {

    describe('part a', () => {

       
       test("example", async () => {
        const answer = await howManyBags('shiny gold', 'test');
        expect(answer).toBe(4);
       })

       test.skip("example 2", async () => {
        const answer = await howManyBags('shiny gold', 'test2');
        expect(answer).toBe(4);
       })

       test.skip("real", async () => {
        const answer = await howManyBags('shiny gold', '');
        expect(answer).toBe(4);
       })

       test("real -  avoid 112", async () => {
        const answer = await howManyBags('shiny gold', '');
        expect(answer).not.toBe(112);
       })

       test("real -  avoid 111", async () => {
        const answer = await howManyBags('shiny gold', '');
        expect(answer).not.toBe(111);
       })


    })

    describe('part b', () => {

     

    });


});