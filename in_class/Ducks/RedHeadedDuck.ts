import Duck from "./Duck";

export default class RedHeadedDuck extends Duck{
    constructor(public color: string, age: number){
        super(age, color)
        this.color = color
    }

    get age():number {
        return this.wrappedAge - 1
    }

    override quack(): void{
        console.log('Redheaded Duck Quack');
    }

    swim():void {
        console.log("Swimming like a Red-Headed Duck");
    }

    fly():void {
        console.log('Flying like a RedHead');
    }

}

const redHead = new RedHeadedDuck('red', 1)
/*  
console.log(redHead.age);
*/