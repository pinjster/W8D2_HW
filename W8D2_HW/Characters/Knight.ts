import { Armor, Defenseable } from "../Defense/Defense";
import Sword from "../Weapons/Sword";
import { Weaponable } from "../Weapons/Weapon";
import Character, { KnightType } from "./Character";


class Knight extends Character implements KnightType {
    static className: string = "Knight";
    defense: Defenseable;
    weapon: Weaponable;

    constructor(){
        super(30, 0, 5)
        this.weapon = new Sword();
        this.defense = new Armor();
    }

    bravery(): void {
        console.log("On Forward!");
    }

    stats(): void {
        console.log(`Knight: LVL: ${this.lvl} HP: ${this.healthLvl} Gold: ${this.gold}`);
        this.weapon.stats();
        this.defense.stats();
    }
}
/* 
const knight = new Knight();
knight.stats();
knight.bravery();
 */