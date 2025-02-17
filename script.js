let speed = 1.2;
let speedCounter = 0;

function changeSpeed(){
    speed -= 0.1;
    let block = document.getElementById("block");
    block.style.animation = "none"
    setTimeout(()=>{
        block.style.animation = `slide ${speed}s infinite linear`;
    }, 5);
}

changeSpeed();

function moveLeft()
{
    let left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if (left>=0)
    {
        character.style.left = left +"px";
    }
}

function moveRight()
{
    let left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if (left < 300)
    {
        character.style.left = left +"px";
    }
}

document.addEventListener("keydown" ,event=> 
    {if(event.key ==="ArrowLeft"){moveLeft()};
    if(event.key === "ArrowRight"){moveRight(0)};
})

var block = document.getElementById("block");
var counter = 0;
block.addEventListener('animationiteration', () =>
{
    var random = Math.floor(Math.random()*3);
    let left = random * 100;
    block.style.left = left +"px";
    counter ++;
    if ((counter % 15) == 0)
        {
            speedCounter ++;
            if (speedCounter < 8)
            {
                changeSpeed();
            }
        }
}
);

setInterval (function(){
    var characterLeft = parseInt(window.getComputedStyle
    (character).getPropertyValue("left"));

    var blockLeft= parseInt(window.getComputedStyle(block)
    .getPropertyValue("left"));


    var blockTop = parseInt(window
    .getComputedStyle(block).getPropertyValue("top"));
    
    if(characterLeft == blockLeft && blockTop <500 && blockTop>300)
    {
        alert("Game Over! Score: "+ counter);
        block.style.animation = "none";
    }

    },50);