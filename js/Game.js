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
        
    vaquita2 = createSprite(700, 400, 20, 20);
    osito = createSprite(780, 400, 20, 20);
    pinguino = createSprite(940, 420, 20, 20);

   // vaquita2.addImage(vaquitaI);
    osito.addImage("oso", ositoI);

    botargas = [vaquita, osito, pinguino];
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
            textSize(25);

            var index = 0;
            var x = 195;
            var y;

            for(var plr in allplayers){
                if (plr === "player" + player.index)
                    fill("red") 
                else
                     fill("black");

                text(allplayers [plr].name + allplayers [plr].distance, 200, displayPos)
                displayPos += 30;

                index += 1;
                x += 225;
                y =displayHeight - allplayers [plr].distance;


                if(index === player.index){
                    stroke(7)
                    fill("#18adb5")
                    ellipse(x, y, 70, 70);
                    camera.position.x = displayWidth/2;
                    
                }
            }

        }

        if(keyIsDown(UP_ARROW)&& player.index != null && player.distance<3080){
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