const {Customer} = require("./customer");
const {Car} = require("./car");

let customer;
let car;

beforeEach(() => {
    customer = new Customer("Bill", 2000);
    car = new Car("Renault", 1000, "petrol");
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

describe("testing customer functions", () => {
    test("customer can afford car", () => {
        const expected = true;
        const actual = customer.canAffordCar(car);
        expect(actual).toBe(expected);
    });

    test("can add car to customer cars", );
});