const {Customer} = require("./customer");
const {Car} = require("./car");
const {Dealership} = require("./dealership");

let customer;
let car;
let dealership;

beforeEach(() => {
    customer = new Customer("Bill", 2000);
});

describe("testing customer class", () => {
    test("can create customer object", () => {
        const expected = customer;
        const actual = new Customer("Bill", 2000);
        expect(actual).toStrictEqual(expected);
    });

    test("can access customer name", () => {
        const expected = "Bill";
        const actual = customer.name;
        expect(actual).toBe(expected);
    });

    test("can access customer wallet", () => {
        const expected = 2000;
        const actual = customer.wallet;
        expect(actual).toBe(expected);
    });
});

describe("testing customer methods", () => {
    test("customer can afford car", () => {
        car = new Car("Renault", 1000, "petrol");

        const expected = true;
        const actual = customer.canAffordCar(car);
        expect(actual).toBe(expected);
    });

    test("can add car to customer cars", () => {
        car = new Car("Renault", 1000, "petrol");
        customer.addCar(car);

        const expected = 1;
        const actual = customer.car.length;
        expect(actual).toBe(expected);
    });

    test("can buy car from dealership", () => {
        car = new Car("Renault", 1000, "petrol");
        dealership = new Dealership("Will's Dealership", 4, [car]);

        customer.buyCar(car, dealership);

        const expected = 1;
        const actual = customer.car.length;
        expect(actual).toBe(expected);
    });
});