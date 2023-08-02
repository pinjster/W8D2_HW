abstract class MusicMedia{
    file: string

    constructor(file: string){
        this.file = file;
    }
}

interface playsCD {
    cd: string;
    playCD(): void
}
interface playsTape {
    tape: string;
    playTape(): void
}
interface playsRecord{
    record: string;
    playRecord(): void
}

class CDs extends MusicMedia implements playsCD{
    cd: string;

    constructor(file: string) {
        super(file)
        let cd: string = file
    }
    playCD(): void {
        console.log("Spins and read with Laser");
    }
}

class Tapes extends MusicMedia implements playsTape{
    tape: string; 

    constructor(file: string) {
        super(file)
        let tape:string  = file;
    }
    playTape(): void {
        console.log("Magnetic Tape is read");
    }
}

class Records extends MusicMedia implements playsRecord{
    record: string;

    constructor(file: string) {
        super(file)
        let record: string = file;
    }
    playRecord(): void {
        console.log("Needle reads grooves");
    }
}

