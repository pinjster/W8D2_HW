import { Weaponable } from "../Weapons/Weapon";
import { Defenseable } from "../Defense/Defense";

export default abstract class Character {
    static className: string = 'Character'
    health: number;
    protected healthLevel: number;
    protected levelIncrement: number;

    constructor(
        health: number, 
        protected level: number = 0, 
        protected goldWrap: number
        ){
            this.health = health;
            this.healthLevel = health;
            this.level = level;
            this.levelIncrement = level;
        }
        
    get lvlInc(): number {
        return this.levelIncrement;
    }

    set lvlInc(value: number) {
        if(value >= 0){
            if(value > this.lvl * 5){
                this.lvl += 1;
            } else {
                this.levelIncrement = value;
            }
        } else {
            this.levelIncrement = 0;
        }
    }
        
    get healthLvl(): number {
        return this.healthLevel;
    }

    set healthLvl(value: number) {
        if(value > 0){
            this.healthLevel = value;
        } else {
            console.log("You are dead, dead, dead");
        }
    }

    get lvl(): number {
        return this.level;
    }

    set lvl(value: number) {
        if(value > 0){
            this.level = value;
            this.lvlInc -= value * 5;
            console.log("You've leveled up!");
        }
    }

    get gold(): number {
        return this.goldWrap;
    }

    set gold(value: number) {
        if(value >= 0){
            this.goldWrap = value;
        }
    }
}



interface Battle {
    weapon: Weaponable;
    defense: Defenseable;
    stats(): void;
}

interface ArcherType extends Battle {
    trickshot(): void;
}

interface DwarfType extends Battle {
    diggyHole(): void;
}

interface KnightType extends Battle {
    bravery(): void;
}

interface OgreType extends Battle {
    rampage(): void;
    greed(): void;
}

interface PeonType extends Battle {
    stock: number;
    farmLvl: number;
    farm(): void;
    tradeGoods(): void;
    barter(): void;
    upgrade(): void; 
}

interface WarlockType extends Battle {
    healthPotion(): void;
}



export {
    ArcherType,
    DwarfType,
    KnightType,
    OgreType,
    PeonType,
    WarlockType
}