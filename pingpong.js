//aqui 
function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //aqui vou por a cor da "mesa"
    background(224,255,255);
    //chamando a função
    criaBolinha(128,128,0)
}

//função bolinha
function criaBolinha(xBolinha, yBolinha, tamBolinha){
    circle (xBolinha, yBolinha, tamBolinha);
}
