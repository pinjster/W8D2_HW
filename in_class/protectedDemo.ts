class TV{
    constructor(protected serialNumber: string){
        this.serialNumber = serialNumber
    }
}

class Roku extends TV{
    displaySerialNumber():void{
        console.log(this.serialNumber);
    }
}

const roku = new Roku('345SDFG300')

roku.displaySerialNumber()