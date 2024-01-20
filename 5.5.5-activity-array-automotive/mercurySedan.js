// //this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

// //this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class car extends vehicle {
    constructor (make, model, year, color, mileage, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage)
         this.maximumPassengers = maximumPassengers;
         this.passengers = passengers;
         this.numberOfWheels = numberOfWheels;
         this.maximumSpeed = maximumSpeed;
         this.fuel  = fuel;
         this.scheduleService = scheduleService
    }

    checkService() {
        if(this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }
// The "start" in this file seems pointless because it already exists in the vehicleBaseClass//
    start() {
        if(this.fuel >0) {
            console.log("engine has started.");
            return this.start = true
        } else {
            console.log('no fuel');
            return this.start = false
        }
    }

loadPassenger (num){
    if (this.passenger <= this.maximumPassengers) {
        if ((num + this.passenger) <= this.maximumPassengers) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log(this.model + " " + this.make + " not enough space for all passengers.");

        }
    } else {
        console.log(this.model + " " + this.make + " is full");

    }
}
}

let A28MercurySedan = new car(Mercury, Sedan, 2024, "babyblue", 23000, 5, 0, 4, 160, 10, false)

A28MercurySedan.start()
A28MercurySedan.loadPassenger(5)
A28MercurySedan.checkService()



//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:
