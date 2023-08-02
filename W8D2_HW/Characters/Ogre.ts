import { Defenseable, Shield } from "../Defense/Defense";
import Club from "../Weapons/Club";
import { Weaponable } from "../Weapons/Weapon";
import Character, { OgreType } from "./Character";


class Ogre extends Character implements OgreType {
    static className: string = "Ogre";
    defense: Defenseable;
    weapon: Weaponable;

    constructor(){
        super(30, 0, 5)
        this.weapon = new Club();
        this.defense = new Shield();
    }

    rampage(): void {
        console.log("Ogre rampage");
    }

    greed(): void {
        console.log("pilfer the goods!");
    }

    stats(): void {
        console.log(`Ogre: LVL: ${this.lvl} HP: ${this.healthLvl} Gold: ${this.gold}`);
        this.weapon.stats();
        this.defense.stats();
    }
}

/* 
const ogre = new Ogre();
ogre.stats()
ogre.rampage();
ogre.greed();
 */