export class Cell{

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isAlive = false;
    }

    setPos(x, y){
        this.x = x;
        this.y = y;
    }

    makeAlive(){
        this.isAlive = true;
    }

    makeDead(){
        this.isAlive = false;
    }

    toggle(){
        if (this.isAlive){
            this.isAlive = false;
        }else{
            this.isAlive = true;
        }
    }
}