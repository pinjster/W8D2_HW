import Duck from "./Duck";

class DecoyDuck extends Duck{
    constructor(age: number, color: string){
        super(age, color)
    }

    quack(): void {
        console.log("Silence");
    }

    swim(): void {
        console.log("floating");
    }

    fly(): void {}
}