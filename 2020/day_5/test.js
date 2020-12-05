const {highestNumber, row, column, seatId, missing} = require('./script');

describe('day5', () => {

    describe('part a', () => {

        test("answer", async ()  => {
            const myAnswer = await highestNumber();
            expect(myAnswer).toBe(888);
        })

        describe("FBFBBFFRLR", () => {
            test("row", async () => {
                const input = "FBFBBFFRLR";
                const output = await row(input);
                expect(output).toBe(44);
            })
        
            test("column", async () => {
                const input = "FBFBBFFRLR";
                const output = await column(input);
                expect(output).toBe(5);
            })
        
            test("seatid", async () => {
                const [r,c] = [44 ,5];
                const output = await seatId(r,c);
                expect(output).toBe(357);
            })
        })

        describe("BFFFBBFRRR", () => {
        
            test("row", async ()  => {
                const input = "BFFFBBFRRR";
                const output = await  row(input);
                expect(output).toBe(70);
            })
        
            test("column", async () => {
                const input = "BFFFBBFRRR";
                const output = await column(input);
                expect(output).toBe(7);
            })
        
            test("seatid", async () => {
                const [r,c] = [70,7];
                const output = await seatId(r,c);
                expect(output).toBe(567);
            })
        })

        describe("FFFBBBFRRR", () => {
            test("row", async () => {
                const input = "FFFBBBFRRR";
                const output = await row(input);
                expect(output).toBe(14);
            })
        
            test("column", async () => {
                const input = "FFFBBBFRRR";
                const output = await column(input);
                expect(output).toBe(7);
            })
        
            test("seatid", async () => {
                const [r,c] = [14,7];
                const output = await seatId(r,c);
                expect(output).toBe(119);
            })
        })

        describe("BBFFBBFRLL", () => {
            test("row", async () => {
                const input = "BBFFBBFRLL";
                const output = await row(input);
                expect(output).toBe(102);
            })
        
            test("column", async () => {
                const input = "BBFFBBFRLL";
                const output = await column(input);
                expect(output).toBe(4);
            })
        
            test("seatid", async () => {
                const [r,c] = [102, 4];
                const output = await seatId(r,c);
                expect(output).toBe(820);
            })
        })

    })

    describe('part a', () => {

        test('my seat', async () => {
            const mySeatId = await missing();
            expect(mySeatId).toBe(522);
        })

    });


});