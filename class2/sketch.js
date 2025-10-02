let xMax= 400;
let yMax= 775;

let xRocket = xMax/2
let yRocket = yMax*0.6;


function setup () {
  createCanvas (xMax, yMax);
}

function draw() {
  background(20,25,40);
//mostrare un testo bianco che 
//dice le coordinate del mouse
//sul foglio da disegno
  fill(255); //bianco
  textSize (20); 
  //stringa x,y
  text("mouseX: " + mouseX + ", \
    mouseY: " + mouseY ,20,20);



//finire contesto
pop();

//disegnare stelle
//120
//3 tipi di stelle: a, b, c
//fino a che abbiamo 120 stelle
//stelle ellissi

push();
  //3 cicli
noStroke();  


// ciclo 2 specifica stella b
  for(let i=0; i < 120; i++){
    let starX = (i*37) % width +(i%3)*5;
    let starY = ((i*73) % height) + (i%7);
    //operatore modulo %
    if( i%2 == 0 ){
      //stella tipo a
      fill (255,255,150)
      ellipse (starX,starY, 1);
    }else if( i%3 == 1 ){
      //stella b
      fill(200,100,255)
      ellipse (starX,starY,1.5)
    }else{
      //stella c
      fill(255,255,100)
      ellipse (starX,starY,2.8)
    }
  }

 //aprire contesto di disegno
push();
fill (220);
stroke (40);
rectMode (CENTER);
rect (xRocket, yRocket+30, 80, 180, 15);

// cerchio
push();
fill (40,150, 220);
stroke (255);
strokeWeight (3);
ellipse (xRocket,yRocket+30,48,48);
pop();

//triangolo
fill (200, 40, 40);
triangle (xRocket-40,yRocket-60, 
          xRocket+40,yRocket-60, 
          xRocket,yRocket-120); 


pop();

yRocket = (yRocket-4) % (yMax);
if (yRocket < -120) {
  yRocket= yMax*0.9;
}

}


