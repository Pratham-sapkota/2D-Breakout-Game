var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
const ballRadius=10;
let score=0;

//creating paddle
const paddleHeight=10;
const paddleWidth=75;
let paddleX=(canvas.width-paddleWidth)/2; //starting paddle in middle of the game screen

//on starting no event occurs so set to false initially
let rightPressed=false;
let leftPressed=false;

//setting up brick variables
const brickRowCount=3;
const brickColumnCount=5;
const brickWidth=75;
const brickHeight = 20;
const brickPadding=10; //padding between the bricks so they dont touch each other
const brickOffsetTop=30;
const brickOffsetLeft=30; //defifing top and left offset so that it doesnt start from the edge of the canvas

//event listeners while pressing certain keys
document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener('keyup',keyUpHandler,false);

function keyDownHandler(e){
    if(e.key=="Right" || e.key=="ArrowRight"){
        rightPressed=true;
    }else if(e.key=="left" ||e.key=="ArrowLeft"){
        leftPressed=true;
    }
}
function keyUpHandler(e){
    if(e.key=="Right" || e.key=="ArrowRight"){
        rightPressed=false;
    }else if(e.key=="Left" || e.key=="ArrowLeft"){
        leftPressed=false;
    }
}
//detecting collisions the easiest way possible. 
//considering if the centre of ball is touching every brick possible

function collisionDetection(){
    for(c=0;c<brickColumnCount;c++){
        for(r=0;r<brickRowCount;r++){
            const b = bricks[c][r]
           if(b.status===1){
            if(x>b.x &&
                x<b.x+brickWidth &&
                y>b.y && 
                y<b.y+brickHeight)
                {
                 dy= -dy;
                 b.status=0;
                 score++;
                 if(score=== brickRowCount*brickColumnCount){
                    alert("Congratulations you won the game");
                    document.location.reload();
                    clearInterval(interval); //required for google chrome
                 }
                }
           }
        }
    }
}
//we will hold all our bricks in two dimensional array
//code below will loop through each rows and columns and create the new bricks.
var bricks=[];
for(c=0;c<brickColumnCount;c++){
    bricks[c]=[];
    for(r=0;r<brickRowCount;r++){
        bricks[c][r]={x:0,y:0, status:1};
    }
}





//brickx and brickY let to paint brick on different positions
function drawBricks(){
    for(c=0;c<brickColumnCount;c++){
        for(r=0;r<brickRowCount;r++){
          if(bricks[c][r].status===1){
            const brickX=c*(brickWidth+brickPadding)+brickOffsetLeft;
            const brickY=r*(brickHeight+brickPadding)+brickOffsetTop;
            bricks[c][r].x=brickX;
            bricks[c][r].y=brickY;
            ctx.beginPath();
            ctx.rect(brickX,brickY,brickWidth,brickHeight);
            ctx.fillStyle="#008600";
            ctx.fill();
            ctx.closePath()
          }
        }
    }
}

//to keep track of score
function drawScore(){
    ctx.font="16px Arial";
    ctx.fillStyle="008600";
    ctx.fillText(`Score: ${score}`,8,20); //8,20 tells the position at which text should be shown
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#008600";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle="#008600";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //this will remove any previous paintings on the rectangle which make it appear as if the ball is moving without leaving trail.
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore()
    collisionDetection();
    x += dx;
    y += dy;

    if(y+dy<ballRadius){
        dy=-dy;
    }else if(y+dy>canvas.height - ballRadius){
        if(x>paddleX && x<paddleX+paddleWidth){
            dy=-dy;
        } else{
            alert("GameOver");
            document.location.reload();
            clearInterval(interval);
        }
    }
    if(x+dx>canvas.width - ballRadius || x+dx<ballRadius){
        dx=-dx;
    }

    if(rightPressed){
        paddleX=Math.min(paddleX+7,canvas.width-paddleWidth) //from these two values the minimum value will be selected whcih will stop the paddle from going out of the box
    } else if (leftPressed){
        paddleX=Math.max(paddleX-7,0);
    }
}





var interval=setInterval(draw, 10);