function setup() {
    createCanvas(600, 600);
    background("Blacl");
  }
  
  function draw() {
    stroke("yellow");
    fill("Purple")
    
  if(mouseIsPressed){
    rect(mouseX, mouseY,15, 20);
  }
  
  }