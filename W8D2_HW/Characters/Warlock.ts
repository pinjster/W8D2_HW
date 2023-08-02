import { Defenseable, Tunic } from "../Defense/Defense";
import Sword from "../Weapons/Sword";
import { Weaponable } from "../Weapons/Weapon";
import Character, { WarlockType } from "./Character";


class Warlock extends Character implements WarlockType{
    static className: string = "Warlock";
    defense: Defenseable;
    weapon: Weaponable;

    constructor(){
        super(25, 0, 20)
        this.defense = new Tunic();
        this.weapon = new Sword();
    }

    healthPotion(): void {
        console.log("You've drank a potion and healed some health");
    }

    stats(): void {
        console.log(`Warlock: LVL: ${this.lvl} HP: ${this.healthLvl} Gold: ${this.gold}`);
        this.weapon.stats();
        this.defense.stats();
    }
}
/* 
const warlock = new Warlock();
warlock.stats();
warlock.healthPotion();
 */