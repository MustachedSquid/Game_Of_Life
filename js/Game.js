export class Game{


    constructor(x, y) {
        this.maxX = x;
        this.maxY = y;


        this.gameArea = [0];

        for (let i = 0; i < this.maxY; i++) {
            let arr = []
            for (let j = 0; j < this.maxX; j++) {

                arr[j] = false;
            }
            this.gameArea[i] = arr;
        }
        this.clearArea();
    }

    clearArea(){
        for (let i = 0; i < this.gameArea.length; i++) {
            for (let j = 0; j < this.gameArea[i].length; j++) {
                this.gameArea[i][j] = false;
            }
        }
    }

    setPos(x, y){
        this.gameArea[y][x] = !this.gameArea[y][x];

        console.log(x +" "+ y )

    }

    checkArea(){
		
		console.log("start check area");
        let newArea = [0];
        
		for (let i = 0; i < this.maxY; i++) {
            let arr = []
            for (let j = 0; j < this.maxX; j++) {

                arr[j] = false;
            }
            newArea[i] = arr;
        }
        for (let i = 0; i < newArea.length; i++) {
            for (let j = 0; j < newArea[i].length; j++) {
                newArea[i][j] = false;
            }
        }
        
        
        for (let i = 0; i < this.gameArea.length; i++) {

            for (let j = 0; j < this.gameArea[i].length; j++) {

                let counter = 0;
                let die = true;
                let x = i;
                let y = j;
                console.log("X: "+ x);
                try {

                    if (this.gameArea[i - 1][j - 1]) {
                        counter++;
                    }
                }catch (e){
                    if (this.gameArea[this.maxX-1][this.maxY-1]) {
                        counter++;
                    }
                }
                try {
                    if(this.gameArea[i-1][j]){
                        counter++;
                    }
                }catch (e){
                    if (this.gameArea[this.maxX-1][this.maxY]) {
                        counter++;
                    }

                }
                try {
                    if(this.gameArea[i-1][j+1]){
                        counter++;
                    }
                }catch (e){
                    if (this.gameArea[this.maxX-1][0]) {
                        counter++;
                    }

                }try {
                    if(this.gameArea[i][j+1]){
                        counter++;
                    }
                }catch (e){
                    if (this.gameArea[this.maxX][0]) {
                        counter++;
                    }

                }
                try {
                    if(this.gameArea[i][j-1]){
                        counter++;
                    }
                }catch (e){
                    if (this.gameArea[this.maxX][this.maxY-1]) {
                        counter++;
                    }

                }
                try {
                    if(this.gameArea[i+1][j+1]){
                        counter++;
                    }
                }catch (e){
                    if (this.gameArea[0][0]) {
                        counter++;
                    }

                }
                try {
                    if(this.gameArea[i+1][j]){
                        counter++;
                    }
                }catch (e){
                    if (this.gameArea[0][this.maxY]) {
                        counter++;
                    }

                }
                try {
                    if(this.gameArea[i+1][j-1]){
                        counter++;
                    }
                }catch (e) {
                    if (this.gameArea[0][this.maxY-1]) {
                        counter++;
                    }

                }

				if(counter == 2 && this.gameArea[i][j]){
					die = false;
				}
					
                if(counter == 3){
                    die = false;
                }
                
					
                



                if(!die){
                   newArea[i][j] = true;
                }else{
                    newArea[i][j] = false;
                }




            }
        }
        
        this.gameArea = newArea;
    }

}
