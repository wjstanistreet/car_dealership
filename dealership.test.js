const {Dealership} = require("./dealership");

const { Car } = require("./car");

let dealership;
let car; 

beforeEach(() => {
    dealership = new Dealership("Will's Dealership", 12, 8);
    car = new Car("Renault", 1000, "petrol");
});

describe("testing dealership class", () => {
    test("can create dealership object", () => {
        const expected = dealership;
        const actual = new Dealership("Will's Dealership", 12, 8);
        expect(actual).toStrictEqual(expected);
    });

    test("can access dealership name", () => {
        const expected = "Will's Dealership";
        const actual = dealership.name;
        expect(actual).toBe(expected);
    });

    
    test("can access dealership car capacity", () => {
        const expected = 12;
        const actual = dealership.stockCapacity;
        expect(actual).toBe(expected);
    });

    test("can access dealership current stock", () => {
        const expected = 8;
        const actual = dealership.stock;
        expect(actual).toBe(expected);
    });
});