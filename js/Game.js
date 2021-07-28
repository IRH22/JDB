class Game{
    constructor(){

    }


    getState(){
        var gamestateRef = database.ref('gameState');
        gamestateRef.on('value', function(data){
            gameState = data.val();
        })

    }

    updateState(state){
        database.ref('/').update({
            gameState : state

        })
    }

    async start(){
        if(gameState === 0){
            //necesita ser asincrone
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once('value'); 
            if(playerCountRef.exists()){ 
                playerCount=playerCountRef.val(); 
                player.getCount; 
            }
            player.getCount();
            form = new Form();
            form.display();
        }
        
    vaquita2 = createSprite(150, 200, 20, 20);
    osito = createSprite(150, 380, 20, 20);
    pinguino = createSprite(150, 560, 20, 20);

    vaquita2.addImage("vaq", vaquitaI);
    osito.addImage("oso", ositoI);
    pinguino.addImage("pingu", pinguinoI);

    vaquita2.depth = 5;
    osito.depth = 5;
    pinguino.depth = 5;

    vaquita2.scale = 0.4;
    osito.scale = 0.35;
    pinguino.scale = 0.7; 

    botargas = [vaquita2, osito, pinguino];

    vaquita2.visible = false;
    osito.visible = false;
    pinguino.visible = false;
    }


    play(){
        form.hide();
        textSize(25);
        text("Inicia", 200, 50);
        // llamar info de los jugadores
        Player.getPlayerInfo();
        var displayPos = 150;
        if(allplayers != undefined){
            background("white");
            //image(pisoI, 0, displayWidth, displayHeight) 
            pista = createSprite(1700, displayHeight/2, 40, 50);
            pista.addImage(pisoI);
            pista.scale = 1.5
            pista.depth = 1;
            pista.displayWidth = 2000
            vaquita2.visible = true;
            osito.visible = true;
            pinguino.visible = true;
            textSize(25);
            

            var index = 0;
            var y = 40;
            var x;

            for(var plr in allplayers){
                if (plr === "player" + player.index)
                    fill("red") 
                else
                     fill("black");

                text(allplayers [plr].name + allplayers [plr].distance, 200, displayPos)
                displayPos += 30;

                index += 1;
                y += 160;
                x =displayWidth + allplayers [plr].distance;

                botargas[index-1].x = x;
                botargas[index-1].y = y;

                if(index === player.index){
                    stroke(7)
                    fill("#18adb5")
                    ellipse(x, y, 70, 70);
                    camera.position.y = displayHeight/2;
                    camera.position.x = botargas[index-1].x;
                }
            }

        }

        if(keyIsDown(RIGHT_ARROW)&& player.index != null && player.distance<3000){
            player.distance += 50;
            player.updateName();           
        }

        if( player.distance >= 3050){
            gameState = 2;
            console.log(player.name)
            
        }

    }


    end(){
        console.log("fin")

        //el coche se repite
    }
}