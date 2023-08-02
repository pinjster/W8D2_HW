// =============== UNFINISHED =================
import { ArcherType, DwarfType, KnightType, OgreType, PeonType, WarlockType } from "../Characters/Character";

class Fight{
    adv: ArcherType | DwarfType | KnightType | OgreType | PeonType | WarlockType;
    opp: ArcherType | DwarfType | KnightType | OgreType | PeonType | WarlockType;

    constructor(
        adv: ArcherType | DwarfType | KnightType | OgreType | PeonType | WarlockType,
        opp: ArcherType | DwarfType | KnightType | OgreType | PeonType | WarlockType
        ){
            this.adv = adv;
            this.opp = opp;
        }
    
    fight(){
        this.adv.weapon
    }
}
