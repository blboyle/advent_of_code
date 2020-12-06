const {
    formatData,
    countGroupAll,
    countGroupSpecific
} = require('./script');

describe('day6', () => {

    describe('part a', () => {

       
        test('example', async () => {
            const groupInfo = await formatData('test');
            const count = countGroupAll(groupInfo);
            expect(count).toBe(11);
        })

        test('reall', async () => {
            const groupInfo = await formatData();
            const count = countGroupAll(groupInfo);
            expect(count).toBe(6714);
        })

    })

    describe('part b', () => {

        test('example', async () => {
            const groupInfo = await formatData('test');
            const count = countGroupSpecific(groupInfo);
            expect(count).toBe(6);
        })

        test('real', async () => {
            const groupInfo = await formatData();
            const count = countGroupSpecific(groupInfo);
            expect(count).toBe(3435);
        })

        test('real - this was wrong 3603', async () => {
            const groupInfo = await formatData();
            const count = countGroupSpecific(groupInfo);
            expect(count).not.toBe(3603);
        })

    });


});