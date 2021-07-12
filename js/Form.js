class Form{
    constructor(){
        this.titulo = createElement('h2');
        this.inputN = createInput("Nombre");
        this.botonE = createButton("Continuar")
    }


    display(){
        this.titulo.html('Carrera De Botargas');
        this.titulo.position(415, 1);

        this.inputN.position(580, 230);

        this.botonE.position(630, 370);

    }
}