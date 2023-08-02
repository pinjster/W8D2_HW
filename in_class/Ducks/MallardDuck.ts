import Duck from "./Duck";

export default class MallardDuck extends Duck{
    static className = "MallardDuck"

    constructor(public color: string, age: number){
        super(age, color)
        this.color = color;
    }

    displayAge():void {
        console.log(this.wrappedAge);
    }

    /* set age(newAge: number){
        if(newAge >= 2){
            this.wrappedAge = newAge;
        }else{
            console.log("invalid age");
        }
    }

    get age(): number {
        return this.wrappedAge
    } */

    override quack():void {
        console.log(`Mallard Duck Quack`);
    }

    swim():void {
        console.log("Swimming like a Mallard Duck");
    }

    fly():void {
        console.log('Flying like an eagle');
    }

}

const mallard = new MallardDuck('brown', 4)

/*  
console.log(mallard.age);
console.log(MallardDuck.className);
mallard.displayAge();
mallard.quack();
*/