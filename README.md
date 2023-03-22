# 2D breakout game using pure JavaScript

This is my first project while I started to relearn JS from basics again. I know I have worked with other frameworks in both frontend and backend but I have always lacked the basics so I am giving time to the basics again. What is different in this project than others what I have done before ? Well. this is the first project I have done by reading documentations only and not watching a single video tutorials. I have created this game using the tutorial on the [MDN page](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)
This is the first project that I have started to work on documentations also.

##What have I used in this project?
This project is solely based on HTML and Javascript .
This project is written entirely on JS and is rendered on HTML `<canvas>`.
Here is the picture of this project:

![Project overview](/images/2da.png)

The game is rendered inside HTML's camvas element. The width and height of canvas is fixed by the user. The canvas element is given an id of "mycanvas" which will make it easier to work with later on.

## Inside the Javascript file

A seperate JS file is created which is named as "index.js". To be able to render graphics on "canvas" element we have to get grab of canvas element used in html file and to do so we grab the id i.e "mycanvas" using` document.getElementById("mycanvas")` . We store the reference to canvas element in a variable. Then we're creating the 'ctx' variable to store the 2D rendering context - the actual tool we can use to paint on the canvas.
At first we created the ball using `ctx.rect()` and various parameters inside. The position of ball's center is given by x and y and the radius of ball is defined which is all used inside the rect() function. `ctx.fillStyle` defines the color of the ball or anything that we wan tto paint on the screen. To start painting of anything on screen we use `ctx.beginPath()` and close with `ctx.closePath()`. Everything that is drawn on the screen i.e ball , paddle , score etc. has its own function which is called inside the `draw()` function. When the ball touches the three walls except the bottom one of the canvas then the ball bounces back but the game is over once it touches the button. To move the paddle at the bottom pf the screen `keyup` and `keydown` events are used which works when the button is pressed or released and it calls a function as given . When the ball touches the bricks then it the ball rebounds and the brick disappears which inturn increases the score in the top left hand of screen. The bricks is 2d array where column of bricks contain row of bricks and and each row contains a brick object. At interval of every 10 milisecond the previous paint is removed and new opaint is done on the screen. When the ball misses the paddle we get "Gameover" alert and when non of the bricks is left "wining" alert messafge is shown.

![gameover screenshot](/images/2db.png)

![winning screenshot](/images/2dc.png)

_This is my first documentation that I have written in such formatted way and this was fun doing , though writing documentation after finishing a project is a lazy job so i will be writing each documentation as soon as I do something and it will be more detailed. Thank you_

