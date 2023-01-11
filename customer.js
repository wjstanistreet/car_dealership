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

Customer.prototype.buyCar = function(car){
//     if (this.canAffordCar()) {

//     }
}

module.exports = {Customer};