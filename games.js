let gamesprite = "idle";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function(e) {
  gamesprite = e.target.value
});

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let gameframe = 0;
const staggerFrame = 5;
const spriteanimation = {};
const animationstates = [
    {
    names: "idle",
    frame:7
    },
    {
    names: "jump",
    frame:7
    },
    {
    names: "fall",
    frame:7
    },
    {
    names: "run",
    frame:9
    },
    {
    names: "dizzy",
    frame:11
    },
    {
    names: "sit",
    frame:5
    },
    {
    names: "roll",
    frame:7
    },
    {
    names: "bite",
    frame:7
    },
    {
    names: "ko",
    frame:12
    },
    {
    names: "gethit",
    frame:4
    }
  ];
animationstates.forEach((states,index) => {
  let frame = {
    loc: [],
  }
  for (let j = 0; j < states.frame; j++){
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frame.loc.push({x: positionX, y:positionY});
    }
  spriteanimation[states.names] = frame;
});
console.log(spriteanimation)

function animate (){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameframe/staggerFrame) % spriteanimation[gamesprite].loc.length;
    let framex = spriteWidth * position;
    let framey = spriteanimation[gamesprite].loc[position].y;
    ctx.drawImage(playerImage,framex,framey,spriteWidth,spriteHeight,0 ,0,spriteWidth,spriteHeight);
    
  gameframe++;
  requestAnimationFrame(animate)
};
animate();

