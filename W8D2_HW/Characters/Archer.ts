import  { Defenseable, Tunic } from "../Defense/Defense";
import Bow from "../Weapons/Bow";
import  { Weaponable } from "../Weapons/Weapon";
import Character, { ArcherType } from "./Character";


export default class Archer extends Character implements ArcherType{
    static className: string = "Archer";
    defense: Defenseable;
    weapon: Weaponable;

    constructor(){
        super(25, 0, 20)
        this.defense = new Tunic();
        this.weapon = new Bow();
    }

    trickshot(): void {
        console.log("Just shot 3 arrows!");
    }

    stats(): void {
        console.log(`Archer: LVL: ${this.lvl} HP: ${this.healthLvl} Gold: ${this.gold}`);
        this.weapon.stats();
        this.defense.stats();
    }
}
/* 
const archer = new Archer();
archer.stats();
archer.trickshot();
 */