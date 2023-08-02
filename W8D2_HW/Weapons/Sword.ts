import Character from "../Characters/Character";
import Weapon, { attackType } from "./Weapon";
import { Swordable } from "./Weapon";

export default class Sword extends Weapon implements Swordable{
    static className: string = 'Sword';
    name?: string;
    readonly type: attackType = attackType.sla;

    constructor(name: string = ""){
        super(0, 12)
        this.name = name;
    }

    swing(opp: Character){
        console.log(`${this.name ? `"${this.name}":` : 'Sword'} swung`);
    }

    stats(): void {
        console.log(`${this.name ? `"${this.name}":` : 'Sword:'} lvl: ${this.level} atk: ${this.atk}`);
        //console.table(this);
    }
}
/* 
const sword = new Sword("sting")
sword.stats()
 */