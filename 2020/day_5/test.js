const {answer, row, column, seatId} = require('./script');

describe('test', () => {

    test("answer", async ()  => {
        const myAnswer = await answer();
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
            const input = [44 ,5];
            const output = await seatId(input);
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
            const input = [70,7];
            const output = await seatId(input);
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
            const input = [14,7];
            const output = await seatId(input);
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
            const input = [102, 4];
            const output = await seatId(input);
            expect(output).toBe(820);
        })
    })

    

});