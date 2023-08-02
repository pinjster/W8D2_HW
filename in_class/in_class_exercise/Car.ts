abstract class Car{

    brake(): void {
        console.log('squeeeel');
    }
    abstract drive(): void
    abstract honk(): void
}

class SmartCar extends Car{

    drive(): void {
        console.log("hummmmmmmmmm..");
    }

    honk(): void {
        console.log("MMmeep!");
    }
}

class Truck extends Car{

    drive(): void {
        console.log('vrooooommmm..');
    }

    honk(): void {
        console.log("BWaaaaaaahp!");
    }
}

const smart = new SmartCar();
smart.drive();
smart.honk();
smart.brake();
const KW = new Truck();
KW.drive(); 
KW.honk();
KW.brake();
