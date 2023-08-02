import Character from "../Characters/Character";

enum attackType {
    lra = "Long Range Attack",
    mga = "Magic Attack",
    bla = "Blunt Attack",
    sla = "Slice Attack",
    pra = "Pierce Attack",
    fra = "Fire Attack",
    ica = "Ice Attack",
    gra = "Ground Attack",
    ara = "Air Attack",
    swa = "Swift Attack",
    ela = "Electric Attack",
    psa = "Poison Attack",
    none = "none"
}

export default abstract class Weapon {
    static className: string = 'Weapon';

    constructor(protected level: number, protected attack: number){
        this.level = level;
        this.attack = attack;
    }
    public get atk(): number {
        return this.attack;
    }
    public set atk(value: number) {
        if(value > 0){
            this.attack = value;
        }
    }

    public get lvl(): number {
        return this.level;
    }

    public set lvl(value: number) {
        if(value > 0){
            this.level = value;
        }
    }
}



interface Weaponable {
    stats():void;
    type: attackType;
}

interface Clubable extends Weaponable {
    swing(opp: Character):void;
}
interface Swordable extends Weaponable {
    swing(opp: Character):void;
    name?: string;
}
interface Bowable extends Weaponable {
    release(opp: Character):void;
}
interface Axeable extends Weaponable {
    chop(opp: Character): void;
}

export {
    Swordable,
    Clubable,
    Bowable,
    Axeable,
    attackType,
    Weaponable
}