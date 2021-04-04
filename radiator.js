img=""

function preload(){
img=loadImage("radiator.jpeg")
}

function setup(){
  canvas=createCanvas(600,400)
  canvas.center()  
}

function draw(){
    image(img,0,0,600,400)
    fill("red")
    text("Heator",120,50)
    
noFill()
stroke("red")
rect(100,400,500,400)
}

