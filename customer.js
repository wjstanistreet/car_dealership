const {Dealership} = require("./dealership");
const {Car} = require("./car");

const Customer = function(name, wallet){
    this.name = name;
    this.wallet = wallet;
    this.car = [];
}

Customer.prototype.canAffordCar = function(car){
    return this.wallet >= car.price;
}

Customer.prototype.addCar = function(carToAdd){
    this.car.push(carToAdd);
}

Customer.prototype.buyCar = function(car, dealership){
    if (this.canAffordCar(car)) {
        this.wallet = this.wallet - car.price;
        dealership.removeCar(car);
        this.addCar(car);
    }
}

module.exports = {Customer};