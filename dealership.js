const Dealership = function(name, stockCapacity, stock){
    this.name = name;
    this.stockCapacity = stockCapacity;
    this.stock = stock;
};

Dealership.prototype.stockTotal = function(){
    return this.stock.length;
}

Dealership.prototype.addCar = function(carToAdd){
    if (this.stock.length < this.stockCapacity) {
        this.stock.push(carToAdd)
    };
}

Dealership.prototype.stockManufacturers = function(){
    return this.stock.map((car) => {return car.manufacturer});
}

Dealership.prototype.findManufacturer = function(manufacturerName){
    return this.stock.filter((car) => {return car.manufacturer === manufacturerName});
}

Dealership.prototype.stockValue = function(){
    return this.stock.reduce((accumulator, car) => {return accumulator + car.price}, 0);
}

module.exports = {Dealership};