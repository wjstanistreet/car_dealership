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
});