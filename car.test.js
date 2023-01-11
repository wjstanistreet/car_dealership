const {Car} = require("./car");

let car;

beforeEach(() => {
    car = new Car("Renault", 1000, "petrol");
});

describe("testing car class", () => {
    test("can create car object", () => {
        const expected = car;
        const actual = new Car("Renault", 1000, "petrol");
        expect(actual).toStrictEqual(expected);
    });

    test("can access car manufacturer", () => {
        const expected = "Renault";
        const actual = car.manufacturer;
        expect(actual).toBe(expected);
    });

    
    test("can access car price", () => {
        const expected = 1000;
        const actual = car.price;
        expect(actual).toBe(expected);
    });

    test("can access car engine type", () => {
        const expected = "petrol";
        const actual = car.engineType;
        expect(actual).toBe(expected);
    });


});