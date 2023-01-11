const Dealership = function(name, stockCapacity, stock){
    this.name = name;
    this.stockCapacity = stockCapacity;
    this.stock = stock;
};

Dealership.prototype.stockTotal = function(){
    return this.stock.length;
}

Dealership.prototype.addCar = function(carToAdd){
    this.stock.push(carToAdd);
}

module.exports = {Dealership};