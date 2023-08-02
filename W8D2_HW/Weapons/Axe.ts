import Character from "../Characters/Character";
import Weapon, { Axeable, Weaponable, attackType } from "./Weapon";


export default class Axe extends Weapon implements Axeable, Weaponable{
    static className: string = 'Axe';
    readonly type: attackType = attackType.sla;

    constructor() {
        super(0, 12)
    }

    chop(opp: Character): void {
        console.log("Axe Swing");
    }

    stats(): void {
        console.table(`Axe: lvl: ${this.lvl} atk: ${this.atk}`);
        //console.table(this);
    }
}