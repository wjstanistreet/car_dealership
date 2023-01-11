const {Dealership} = require("./dealership");

const {Car} = require("./car");

const {Customer} = require("./customer");

let dealership;
let car; 
let customer;

beforeEach(() => {
    car = new Car("Renault", 1000, "petrol");
    dealership = new Dealership("Will's Dealership", 4, [car]);
    customer = new Customer("Bill", 4000);
});

describe("testing dealership class", () => {
    test("can create dealership object", () => {
        const expected = dealership;
        const actual = new Dealership("Will's Dealership", 4, [car]);
        expect(actual).toStrictEqual(expected);
    });

    test("can access dealership name", () => {
        const expected = "Will's Dealership";
        const actual = dealership.name;
        expect(actual).toBe(expected);
    });

    test("can access dealership car capacity", () => {
        const expected = 4;
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

    test("can't add car to stock that is full", () => {
        const testCar1 = new Car("Honda", 2500, "diesel");
        const testCar2 = new Car("Audi", 5500, "electric");
        const testCar3 = new Car("Honda", 3500, "petrol");
        const testCar4 = new Car("Toyota", 4000, "petrol");
        const testCar5 = new Car("Jeep", 2300, "diesel");

        dealership.addCar(testCar1);
        dealership.addCar(testCar2);
        dealership.addCar(testCar3);
        dealership.addCar(testCar4);
        dealership.addCar(testCar5);

        const expected = 4;
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
    
    test("can find all cars in stock from specific manufacturer - one car", () => {
        const expected = [car];
        const actual = dealership.findManufacturer("Renault");
        expect(actual).toStrictEqual(expected);
    });

    test("can find all cars in stock from specific manufacturer - multiple cars", () => {
        const testCar = new Car("Renault", 1200, "petrol");

        dealership.addCar(testCar);

        const expected = [car, testCar];
        const actual = dealership.findManufacturer("Renault");
        expect(actual).toStrictEqual(expected);
    });

    test("can get total value of cars in stock", () => {
        const testCar = new Car("Renault", 1200, "petrol");

        dealership.addCar(testCar);

        const expected = 2200;
        const actual = dealership.stockValue();
        expect(actual).toStrictEqual(expected);
    });

    test("can remove car from stock", () => {
        const testCar = new Car("Honda", 2500, "diesel");
        dealership.addCar(testCar);

        dealership.removeCar(testCar);

        const expected = 1;
        const actual = dealership.stockTotal();
        expect(actual).toBe(expected);
    });    
    
    test("will not remove car not in stock", () => {
        const testCar = new Car("Honda", 2500, "diesel");

        dealership.removeCar(testCar);

        const expected = 1;
        const actual = dealership.stockTotal();
        expect(actual).toBe(expected);
    });
});

describe("testing buying a car", () => {
    
});