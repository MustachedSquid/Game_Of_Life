import {Game} from "./Game.js";

let game;
let	running = false;

let e1;
let e2;

function setPos(x, y){
    game.setPos(x, y);
    gameToHtml();
}

function gameToHtml(){

	console.log("start update to html");
    let htmlGame = document.getElementById("game");

    let gameAreaHtml = "<table>";
    for (let i = 0; i < game.maxY; i++) {
        gameAreaHtml += "<tr>";
        for (let j = 0; j < game.maxX; j++) {
            let result = "tab0";
            if(game.gameArea[j][i]){
                result = "tab1";
            }
            gameAreaHtml += '<td id="tx'+j+'y'+i+'" class="'+result+'"></td>';
        }
        gameAreaHtml +="</tr>";
    }
    gameAreaHtml += "</table>";

    htmlGame.innerHTML = gameAreaHtml;

    for (let i = 0; i < game.maxY; i++) {
        for (let j = 0; j < game.maxX; j++) {
            let td = document.getElementById("tx" + j +"y"+ i);
            td.addEventListener("click", function(){setPos(i, j)})
        }
    }

}


function keypress(e){
	console.log(e.keyCode)
		
	if(e.keyCode === 72){
		
		game.checkArea();
		gameToHtml();
	}

    if(e.keyCode === 74){

        running = !running;
        update();


    }
}

function checkArea(){
    game.checkArea();

}
function update(){
	console.log("Run: "+running);
	if(running){
		console.log("Running...");
		e1 = setInterval(checkArea, 100);
		e2 = setInterval(gameToHtml, 100);
	}else{
		clearInterval(e1);
		clearInterval(e2);
	}
}

function main(){

    game = new Game(41,41);
    
    window.addEventListener('keyup', keypress);

    gameToHtml()


}

window.addEventListener("load", main);
