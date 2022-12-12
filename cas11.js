// // zadatak1
// class Product {
//     constructor(name= "",price = 0,stockQuantity = 0) {
//     this.name = name;
//     this.price = price;
//     this.stockQuantity = stockQuantity;
    

// }
// getStockValue (){
//     return this.price * this.stockQuantity
// }
// }

// const product = new Product ("tires", 150, 350)
// console.log(product.getStockValue())

// //zadatak2
// class Vehicle {
//     constructor(brand = "", numberOfWheels = 1, currentSpeed = 0, speedlimit = 0){
//         this.brand = brand;
//         this.numberOfWheels = numberOfWheels;
//         this.currentSpeed = currentSpeed;
//         this.speedlimit = speedlimit
//     } 
//     accelerate(){
//         return Math.floor(Math.random() * this.speedlimit + 1)
//     } 
//     status(){
//         if (this.currentSpeed > this.speedlimit / 2){
//             return "You are going too fast, be careful!"
//         }
//         if (this.currentSpeed <= this.speedlimit / 2){
//             return "Thanks for driving safely!"
//         }
//     }   
// }
//         const vehicle = new Vehicle ("Stojadin", 4, 40, 80)
//         console.log(vehicle.accelerate(), vehicle.status())

//         class Car extends Vehicle{
//             constructor(brand, numberOfWheels = 4, currentSpeed, speedlimit, tankCapacity = 55, currentFuelQuantity,){
//                 super(brand, numberOfWheels,currentSpeed, speedlimit);
//                 this.tankCapacity = tankCapacity;
//                 this.fuelQuantity = Math.floor(Math.random() * this.tankCapacity);
//         }        
//         getMissingQuantityFromTank(){
//             return "You need " + (this.tankCapacity - this.fuelQuantity) + " liters to fill up your tank!"
//         }

//         }
//         const car = new Car ("Stojadin", "4", "60", "80", "50", "30");
//         console.log(car.getMissingQuantityFromTank());
    



