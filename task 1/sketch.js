function setup() 
{
    createCanvas(1024, 576);
}

function cloud(x, y, size)
{    
    let mainSizeX = size*30;
    let mainSizeY = mainSizeX*3/10;

    let leftStartX = x + mainSizeX*2/5;
    let leftD = mainSizeX*2/5;

    let rightStartX = x + mainSizeX*2/3;
    let rightD = mainSizeX*3/10;

    fill("rgba(224, 231, 234, 0.5)");
    noStroke();
    rect(x, y, mainSizeX, mainSizeY, 100);
    arc(leftStartX, y, leftD, leftD, PI, 0);
    beginClip({ invert: true });
        arc(leftStartX, y, leftD, leftD, PI, 0);
    endClip();
    arc(rightStartX, y, rightD, rightD, PI, 0);
}

function mountain(x, size, hue)
{
    let height = 400 - size*30;
    let end = x + size*40;
    let mid = x + (end - x)/2;

    let snowLeftX = x + (mid - x)*3/4;
    let snowLeftY = height + size*30/4;

    let snowMidtY = height + size*30*(17/60);

    let snowRightX = end - (mid - x)*1/2;
    let snowRightY = height + size*30/2;

    colorMode(HSL);
    fill(0, 0, 50*hue);
    noStroke();
    triangle(x, 400, end, 400, mid, height);
    fill(0, 0, 75*hue);
    quad(mid, height, snowLeftX, snowLeftY, mid, snowMidtY, snowRightX, snowRightY);
    colorMode(RGB);
}

function tree(x, y, size)
{    
    let woodH = y - 30*size;

    let leavesCentre = woodH - 10*size;
    let leavesD = 65*size;
    let leavesH = 45*size;

    let branchRightX = x + leavesD/4;
    let branchLeftX = x - leavesD/5;
    let branchY = woodH - 5*size;

    fill("rgba(96, 129, 64, 0.6)");
    ellipse(x, leavesCentre, leavesD, leavesH);
    stroke("rgb(141, 111, 100)");
    strokeWeight(9*size);
    line(x, y, x, woodH)
    strokeWeight(6*size);
    line(x, woodH, branchRightX, branchY);
    line(x, woodH, branchLeftX, branchY); 
    noStroke();
    fill("rgba(96, 129, 64, 0.5)");
    ellipse(x, leavesCentre, leavesD, leavesH);
}

function canyon()
{
    noStroke();
    fill("rgb(182, 217, 240)");
    quad(300, 400, 120, 400, 140, 576, 280, 576);
    fill("rgb(179, 164, 137)");
    triangle(120, 400, 120, 576, 140, 576); //left
    triangle(300, 400, 280, 576, 300, 576); //right
    stroke("rgb(161, 152, 123)");
    strokeWeight(3);
    line(120, 400, 120, 576); //left
    line(300, 400, 300, 576); //right

    stroke("rgb(120, 98, 76)");
    strokeWeight(5);
    line(100, 460, 100, 430);
    line(100, 490, 100, 530);
    line(320, 470, 320, 440);
    line(320, 525, 320, 540);
    line(320, 525, 300, 540)
    noFill();
    strokeWeight(2);
    //upper left string
    beginShape();
        vertex(100, 435);
        bezierVertex(120, 460, 150, 550, 145, 576);
    endShape();
    //bottom left string
    beginShape();
        vertex(100, 495);
        bezierVertex(120, 540, 140, 550, 135, 576);
    endShape();
    //upper right string
    beginShape();
        vertex(320, 445);
        bezierVertex(300, 470, 260, 550, 265, 576);
    endShape();
}

function sun()
{
    stroke("rgba(240, 224, 112, 0.4)");
    strokeWeight(35);
    fill("rgb(240, 224, 112)");
    circle(900, 100, 125);
}

function sunbeam()
{
    noStroke();
    fill("rgba(240, 224, 112, 0.15)");
    quad(840, 100, 970, 100, 600, 500, 400, 500);
    fill("rgba(240, 224, 112, 0.15)");
    ellipse(500, 500, 200, 50);
}

function treasure()
{
    fill(255);
    textSize(90);
    text
      text("🥀", 460, 490);
}

function sky()
{
    background("rgb(182, 217, 240)"); 
}

function grass()
{
    noStroke();
    fill("rgb(147, 190, 89)");
    rect(0, 400, 1024, 400);
}

function draw() 
{
    sky();

    grass();

    mountain(450, 10, 0.8);
    mountain(400, 8, 0.9);
    mountain(600, 7, 1)

    cloud(150, 120, 4);
    cloud(200, 200, 10);
    cloud(500, 100, 6);
    cloud(400, 170, 7);

    tree(900, 450, 3);
    tree(800, 500, 4);
    tree(1000, 510, 3.5);
    tree(13, 425, 2.5)

    canyon();
    
    treasure();

    sun();

    sunbeam();
}