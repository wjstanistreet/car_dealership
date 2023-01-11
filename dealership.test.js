const {Dealership} = require("./dealership");

const { Car } = require("./car");

let dealership;
let car; 

beforeEach(() => {
    car = new Car("Renault", 1000, "petrol");
    dealership = new Dealership("Will's Dealership", 12, [car]);
});

describe("testing dealership class", () => {
    test("can create dealership object", () => {
        const expected = dealership;
        const actual = new Dealership("Will's Dealership", 12, [car]);
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
        const expected = [car];
        const actual = dealership.stock;
        expect(actual).toStrictEqual(expected);
    });
});

describe("testing dealership methods", () => {
    test("can count total stock", () => {
        const expected = 1;
        const actual = dealership.stockTotal();
        expect(actual).toBe(expected);
    });

    
    test("can add car to stock", () => {
        const testCar = new Car("Honda", 2500, "diesel");

        dealership.addCar(testCar);

        const expected = 2;
        const actual = dealership.stockTotal();
        expect(actual).toBe(expected);
    });

    test("can return array of car manufacturer's in stock", () => {
        const testCar = new Car("Honda", 2500, "diesel");

        dealership.addCar(testCar);

        const expected = ["Renault", "Honda"];
        const actual = dealership.stockManufacturers();
        expect(actual).toStrictEqual(expected);
    });




});