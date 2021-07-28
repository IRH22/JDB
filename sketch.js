var form, canvas;
var database;
var form, player, game;
var gameState = 0;
var playerCount;
var allplayers;
var pista, pisoI;
var fondo;
var vaquita2, osito, pinguino;
var vaquitaI, ositoI, pinguinoI;
var botargas = [];

function preload(){
    fondo = loadImage("images/Fondo.png");

    vaquitaI = loadImage("../images/Vaquita.png");
    ositoI = loadImage("../images/ositoB.png");
    pinguinoI = loadImage("../images/pinguino.png");
    pisoI = loadImage("../images/pista.png");
}


function setup(){
    canvas = createCanvas(displayWidth, displayHeight);
    database = firebase.database();
  
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    if(playerCount === 3){
        game.updateState(1);
    }
 
    if(gameState === 1){
        clear();
        game.play();
    }
 
    if(gameState === 2){
        game.end();
        //ajustar que no se vea doble
    }
    
    
    drawSprites();
}

