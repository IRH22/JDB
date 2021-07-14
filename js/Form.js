class Form{
    constructor(){
        this.titulo = createElement('h2');
        this.inputN = createInput("Nombre");
        this.botonP = createButton("Continuar")
        this.saludos = createElement('h3');
    }

    hide(){
        this.titulo.hide();
        this.inputN.hide();
        this.botonP.hide();
        this.saludos.hide();
    }


    display(){
        this.titulo.html('Carrera De Botargas');
        this.titulo.position(415, 1);

        this.inputN.position(580, 230);

        this.botonP.position(630, 370);

        this.botonP.mousePressed(()=>{
            //lo que pasa si se aprieta
            document.body.style.backgroundColor = "#0000FF";
            this.inputN.hide();
            this.botonP.hide();
            this.titulo.hide();
            // guardar en DB
            player.name = this.inputN.value();
            playerCount +=1;
            player.index = playerCount
            player.updateCount(playerCount);
            player.updateName();
            this.saludos.html('hola ' + player.name);
            this.saludos.position(630, 200);
           // this.botonR.show();
            
        })

    }

  
}