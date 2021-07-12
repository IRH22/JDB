var form, canvas;

function preload(){
    
}


function setup(){
    createCanvas(500,500);
    form = new Form();
    canvas = createCanvas(displayWidth-20, displayHeight-170);
}

function draw(){
    
    form.display()
    
    drawSprites();
}

