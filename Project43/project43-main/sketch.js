var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(500,657); 

    angleMode(DEGREES);   
}

function draw(){
    background(0,0,0);

    
    textSize(30);
    fill("Yellow");
    text(" CLOCK", 100,400);

    textSize(25);
    fill(0,0,255);
    text("Blue stands for hour", 70,460);

    textSize(25);
    fill(255,0,0);
    text("Red stands for seconds", 40,500);

    textSize(25);
    fill(0,255,0);
    text("Green stands for minutes", 53,540);
 
    translate(200,200)
    rotate(-90)

    hr = hour();
    mn = minute();
    sc = second();

    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);

    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn, 0, 60, 0, 360);

    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,  0, 12, 0, 360);


    push();
    rotate(scAngle); 
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()


    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,85,0);
    pop()


    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,45,0);
    pop()



    strokeWeight(7);
    noFill();

    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);

    strokeWeight(7);
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);

    strokeWeight(7);
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);

    drawSprites();
  
}
