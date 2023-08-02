enum defenseType {
    lrd = "Long Range Defense",
    mgd = "Magic Defense",
    bld = "Blunt Defense",
    sld = "Slice Defense",
    prd = "Pierce Defense",
    frd = "Fire Defense",
    icd = "Ice Defense",
    grd = "Ground Defense",
    ard = "Air Defense",
    swd = "Swift Defense",
    eld = "Electric Defense",
    psd = "Poison Defense",
    none = "none"
}

export default abstract class Defense {
    static className = 'Defense';

    constructor(protected level: number = 0){
        this.level = level;
    }

    public get lvl(): number {
        return this.level;
    }
    public set lvl(value: number) {
        if( value > 0){
            this.level = value;
        }
    }
}

interface Defenseable{
    type: defenseType;
    stats(): void;
}
/* 
interface Shield{

}
interface Armor{

}
interface Tunic{

} 
*/

class Shield extends Defense implements Defenseable{
    static className: string = "Shield";
    readonly type: defenseType = defenseType.prd;

    constructor() {
        super(0)
    }

    stats(): void {
        console.log(`Shield: Lvl: ${this.lvl} (${this.type})`);
    }
}

class Armor extends Defense implements Defenseable{
    static className: string = "Armor";
    readonly type: defenseType = defenseType.sld;

    constructor() {
        super(0)
    }

    stats(): void {
        console.log(`Armor: Lvl: ${this.lvl} (${this.type})`);
    }
}

class Tunic extends Defense implements Defenseable{
    static className: string = "Tunic";
    readonly type: defenseType = defenseType.swd;

    constructor() {
        super(0)
    }

    stats(): void {
        console.log(`Tunic: Lvl: ${this.lvl} (${this.type})`);
    }
}

export {
    Shield,
    Armor,
    Tunic,
    Defenseable
}