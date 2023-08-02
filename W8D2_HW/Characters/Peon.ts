import { Defenseable, Tunic } from "../Defense/Defense";
import Club from "../Weapons/Club";
import { Weaponable } from "../Weapons/Weapon";
import Character, { PeonType } from "./Character";


class Peon extends Character implements PeonType{
    static className: string = "Peon";
    defense: Defenseable;
    weapon: Weaponable;
    stock: number;
    farmLvl: number;

    constructor(){
        super(10, 0, 1)
        this.stock = 0;
        this.farmLvl = 0;
        this.weapon = new Club();
        this.defense = new Tunic();
    }

    farm(): void {
        console.log("Plotted land. It looks to be a good harvest");
    }

    tradeGoods(): void {
        console.log("Walk into the village and traded goods");
    }

    barter(): void {
        console.log("A traveller is looking to trade");
    }

    upgrade(): void {
        console.log("Trade gold for better gear");
    }

    stats(): void {
        console.log(`Peon: LVL: ${this.lvl} HP: ${this.healthLvl} Gold: ${this.gold}`);
        this.weapon.stats();
        this.defense.stats();
    }
}
/* 
const peon = new Peon();
peon.stats();
peon.farm();
peon.tradeGoods();
peon.barter();
peon.upgrade();
 */