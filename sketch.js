var form, canvas;
var database;
var form, player, game;
var gameState = 0;
var playerCount;
var allplayers;
var piso;
var fondo;
var pista, pistaI;
var vaquita, osito, pinguino;
var vaquitaI, ositoI, pinguinoI;
var botargas = [];

function preload(){
    fondo = loadImage("images/Fondo.png");

    vaquitaI = loadImage("../images/Vaquita.png");
    ositoI = loadImage("../images/osito.png");
    pinguinoI = loadImage("../images/pinguino.png");
    pistaI = loadImage("../images/pista.png");
}


function setup(){
    database = firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
    canvas = createCanvas(displayWidth-20 , displayHeight-170);
}

function draw(){
    if(playerCount === 2){
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

