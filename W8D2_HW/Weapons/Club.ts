import Character from "../Characters/Character";
import Weapon, { Clubable, attackType } from "./Weapon";


export default class Club extends Weapon implements Clubable{
    static className: string = "Club";
    readonly type: attackType = attackType.bla;

    constructor() {
        super(0, 10)
    }

    swing(opp: Character): void {
        console.log("Club was swung");
    }

    stats(): void {
        console.table(`Club: lvl: ${this.lvl} atk: ${this.atk}`);
        //console.table(this);
    }
}

/* 
const club = new Club()
club.stats()
 */