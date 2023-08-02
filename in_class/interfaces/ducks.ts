export default abstract class Duck{
    static className: string = 'Duck'

    constructor(protected wrappedAge: number){
        this.wrappedAge = wrappedAge
    }

    get age(): number {
        return this.wrappedAge
    }
    
    set age(value: number) {
       this.wrappedAge = value > 0 ? value : this.wrappedAge
    }
}

interface Flyable {
    wings: string;
    fly(): void 
}
interface Swimmable {
    swim(): void
}
interface Quackable {
    quack(): void
}

class MallardDuck extends Duck implements Flyable, Swimmable, Quackable{
    static className = "MallardDuck"
    wings: string = 'mallard wings';

    constructor(age: number){
        super(age)
    }

    displayAge():void {
        console.log(this.wrappedAge);
    }

    quack():void {
        console.log(`Mallard Duck Quack`);
    }

    swim():void {
        console.log("Swimming like a Mallard Duck");
    }

    fly():void {
        console.log('Flying like an eagle');
    }

}

class RedHeadedDuck extends Duck implements Flyable, Swimmable, Quackable{
    wings: string = "RHDuck Wings"
    
    constructor(age: number){
        super(age)
    }

    get age():number {
        return this.wrappedAge - 1
    }

    quack(): void{
        console.log('Redheaded Duck Quack');
    }

    swim():void {
        console.log("Swimming like a Red-Headed Duck");
    }

    fly():void {
        console.log('Flying like a RedHead');
    }

}

class DecoyDuck extends Duck implements Swimmable{
    constructor(age: number){
        super(age)
    }

    swim(): void {
        console.log("floating");
    }
}

const quackers: Quackable[] = [new MallardDuck(2), new RedHeadedDuck(4)]
const flyers: Flyable[] = [new MallardDuck(2), new RedHeadedDuck(4)]
const swimmers: Swimmable[] = [new MallardDuck(2), new RedHeadedDuck(4), new DecoyDuck(1)]

for(let i = 0; i < quackers.length; i++){
    quackers[i].quack()
}
for(let i = 0; i < flyers.length; i++){
    console.log(flyers[i].wings);
}
for(let i = 0; i < swimmers.length; i++){
    console.log(swimmers[i].swim());
}


