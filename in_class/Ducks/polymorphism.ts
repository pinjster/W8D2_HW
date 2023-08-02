import Duck from "./Duck";
import MallardDuck from "./MallardDuck"
import RHDuck from "./RedHeadedDuck"

const duckArray: Duck[] = [ new MallardDuck('brown', 4), new RHDuck('red', 2)]

//console.log(duckArray);

for(const duck of duckArray){
    console.log(duck.age);
    duck.quack();
    console.log(duck.color);
    duck.swim();
    
}