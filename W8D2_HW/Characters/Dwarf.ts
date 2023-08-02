import { Armor, Defenseable } from "../Defense/Defense";
import Axe from "../Weapons/Axe";
import { Weaponable } from "../Weapons/Weapon";
import Character, { DwarfType } from "./Character";

class Dwarf extends Character implements DwarfType{
    static className: string = "Dwarf";
    defense: Defenseable;
    weapon: Weaponable;

    constructor(){
        super(20, 0, 40)
        this.weapon = new Axe();
        this.defense = new Armor();
    }

    diggyHole(): void {
        console.log("I am a dwarf and I'm digging a hole");
    }

    stats(): void {
        console.log(`Dwarf: LVL: ${this.lvl} HP: ${this.healthLvl} Gold: ${this.gold}`);
        this.weapon.stats();
        this.defense.stats();
    }
}
/* 
const dwarf = new Dwarf();
dwarf.stats();
dwarf.diggyHole();
 */