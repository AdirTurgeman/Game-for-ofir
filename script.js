let speed = 1.2;
let speedCounter = 0;
let blockHeight = 100;
let counter =0;


document.getElementById("startButton").addEventListener("click",function(){
    document.getElementById("game").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    startGame();
});


function startGame()
{
    counter = 0;
    speedCounter = 0;
    speed = 1.2;
    blockHeight = 100;
    changeSpeed();
}





function changeSpeed(){
    speed -= 0.1;
    let block = document.getElementById("block");
    block.style.animation = "none"
    setTimeout(()=>{
        block.style.animation = `slide ${speed}s infinite linear`;
    }, 1);
}



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

        if (counter >20)
        {
           differentSize();
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
    
    if(characterLeft == blockLeft && blockTop <500 && blockTop + getHeight() >400)
    {
        alert("Game Over! Score: "+ counter);
        block.style.animation = "none";
    }

    },50);

    function differentSize()
    {
        var block = document.getElementById("block");
        block.addEventListener('animationiteration', () =>
            {
                var random =Math.floor(Math.random() *5);
                if(random < 3)
                {
                let height = (random+1) * 100;
                block.style.height = height +"px";
                udpadteHeight(height);
                }
                else
                {
                    let height = 100;
                    block.style.height = height +"px";
                    udpadteHeight(height);
                }
            });
    }

    function udpadteHeight(height)
    {
    
        blockHeight = height;
    }

    function getHeight(){
        return blockHeight;

    }


