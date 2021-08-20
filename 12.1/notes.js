/* Keywords/concepts used:
  1. class - making an object type
  2. this - for property assignments
  3. extends - for inheritance
  4. super - for calling the constructor of extended classes
  5. new (in console of "served" webpage)
  6. instanceof
*/
class Vehicle{
  constructor(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString(){
    return `The vehicle is a ${this.make} ${this.model} made in ${this.year}.`
  }
  }
class Car extends Vehicle{
  constructor(make,model,year){
    super(make,model,year);
    this.numWheels = 4;
  }
}
class Motorcycle extends Vehicle{
  constructor(make,model,year){
    super(make,model,year);
    this.numWheels = 2;
  }
  revEngine(){
    return "VROOM!!!";
  }
}
class Garage{
  constructor(cap){
    this.vehicles = [];
    this.capacity = cap;
  }
  add(newV) {
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}