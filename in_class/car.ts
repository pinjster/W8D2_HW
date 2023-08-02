import MoveableObject from "./MoveableObject";

class Car {
    readonly vin: string;
    readonly make: string;
    readonly model: string;
    readonly year: number;
    position: MoveableObject;
    nickname?: string;

    constructor(vin: string, make: string, model: string, year: number){
        this.vin = vin
        this.make = make;
        this.model = model;
        this.year = year;
        this.position = new MoveableObject()
    }

    drive(miles: number): void {
        this.position.moveSideways(miles)
        console.log(`You drove ${miles} miles and you're at position ${this.position.x}`);
    }

    printInfo():void {
        console.log("================================================");
        console.log(`VIN: ${this.vin} ${this.year} ${this.make} ${this.model} `);
        console.log("================================================");
    }
}

const car = new Car("JH7876ASD097678", 'Honda', 'CR-Z', 2012);

console.table(car);

car.nickname = 'z'
car.drive(12)
car.drive(4)


car.printInfo()

class Car2 {
    position: MoveableObject;
    nickname?: string;

    constructor(private readonly vin: string,
        public readonly make: string,
        public readonly model: string,
        public readonly year: number
        ){
        this.vin = vin
        this.make = make;
        this.model = model;
        this.year = year;
        this.position = new MoveableObject()
    }

    drive(miles: number): void {
        this.position.moveSideways(miles)
        console.log(`You drove ${miles} miles and you're at position ${this.position.x}`);
    }

    printInfo():void {
        console.log("================================================");
        console.log(`VIN: ${this.vin} ${this.year} ${this.make} ${this.model} `);
        console.log("================================================");
    }
}


