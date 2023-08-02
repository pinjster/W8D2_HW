export default class MoveableObject {
    private wrappedX: number;
    private wrappedY: number;

    constructor(wrappedX: number = 0, wrappedY: number = 0){
        this.wrappedX = wrappedX;
        this.wrappedY = wrappedY;
    }

    get y(): number{
        return this.wrappedY
    }
    set y(newY: number){
        if(newY >= 0){
            this.wrappedY = newY
        }
    }
    get x(): number{
        return this.wrappedX
    }
    set x(newX: number){
        if(newX >= 0){
            this.wrappedX = newX
        }
    }

    moveUp(distance: number){
        this.y += distance;
    }

    moveDown(distance: number){
        this.y -= distance;
    }

    moveSideways(distance: number){
        this.x += distance;
    }

}

const mo = new MoveableObject()

mo.x -= 1
console.table(mo);