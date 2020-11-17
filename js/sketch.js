let x, y;
let kolom = 0, rij = 0, kolom2 = 0, rij2 = 0;
let heart;
let earth;

function preload(){
  heart = loadImage("js/img/Heart2.png");
  earth = loadImage("js/img/Earthday.jpg")
  }

function setup() {
  createCanvas(500, 700);

  rectMode(CENTER);
  angleMode(DEGREES);
  imageMode(CENTER);
  
  background(255);
  
  kolom = int(random(0,5));
  kolom2 = int(random(0,5));
  rij = int(random(0,7));
  rij2 = int(random(0,7));
  
  print(kolom, kolom2, rij, rij2);
  
  
  for (let i=0;i<5;i++){
    
    for(let j=0;j<7;j++){
      
      x = i * 95+80;
      y = j * 95+70;
      
      if(i==kolom&&j==rij){
         tint("red");
         image(heart, x-30, y-25, 70, 60);
         noTint();
      } else if (i==kolom2&&j==rij2){
         image(earth, x-40, y-35, 90, 90);
      } else {
        let rb = random(70, 125)
        tint(rb, 190, rb);
        image(heart, x-30, y-25, 70, 60);
        noTint();
      }
      
      
    }
    
  }
  
}

function draw() {
  
}