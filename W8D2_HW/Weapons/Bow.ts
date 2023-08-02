import Character from "../Characters/Character";
import Weapon, { Bowable, attackType } from "./Weapon";


export default class Bow extends Weapon implements Bowable{
    static className: string = "Bow";
    readonly type: attackType = attackType.lra;

    constructor() {
        super(0, 9)
    }

    release(opp: Character): void {
        console.log("Arrow Shot");
    }

    stats(): void {
        console.table(`Bow: lvl: ${this.lvl} atk: ${this.atk}`);
        //console.table(this);
    }
}
/* 
const bow = new Bow();
bow.stats()
 */