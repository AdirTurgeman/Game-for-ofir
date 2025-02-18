let speed = 1.2;
let speedCounter = 0;
let blockHeight = 100;
let counter = 0;
let block2Height = 100;
let counter2 = 0;
let speed2Counter = 0;
let block2started = false;



    const gameDiv = document.getElementById("game");
    const character = document.getElementById("character");
    const startButton = document.getElementById("startButton");
    const block = document.getElementById("block");
    const block2 = document.getElementById("block2");

    startButton.addEventListener("click",function (){
        gameDiv.style.display = "block";
        startButton.display = "none";
        counter = 0;
        startGame();
    });


function startGame()
{
    counter = 0;
    speedCounter = 0;
    speed = 1.2;
    blockHeight = 100;
    block2Height = 100;
    speed2Counter = 0;
    block2started = false;

    block.style.animation = `slide ${speed}s infinite linear`;
    block2.style.animation = 'none';
    block2.style.display = "none";

    changeSpeed();
}





function changeSpeed(){
    if(speed > 0.6)
    {
        speed -= 0.1;
        block.style.animation = "none"
        setTimeout(()=>{
            block.style.animation = `slide ${speed}s infinite linear`;
        }, 1);
    }
}

function changeSpeed2()
{
    if (speed > 0.6)
    {

    speed -=0.1;
    block2.style.animation = "none"
    setTimeout(() => {
        block2.style.animation = `slide ${speed}s infinite linear`;
    }, 1); 

    }

    
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


block.addEventListener('animationiteration', () =>
{
    let random = Math.floor(Math.random()*3);
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
           differentSize(block);
        }

        if (counter > 35 && !block2started)
        {
            block2.style.display = "block";
            block2.style.animation = `slide ${speed}s infinite linear`;
            block2started = true;

        }
}
);


block2.addEventListener('animationiteration', ()=>
{
    let random =Math.floor(Math.random() *3);
    let left = random *100;
    block2.style.left = left + "px";
    counter2 ++;

    if ((counter2 % 15) == 0)
        {
            speed2Counter ++;
            if (speed2Counter < 5)
            {
                changeSpeed2();
            }
        } 

        if (counter2 > 20)
        {
            differentSize(block2);
        }
})


setInterval (function(){
    var characterLeft = parseInt(window.getComputedStyle
    (character).getPropertyValue("left"));

    var blockLeft= parseInt(window.getComputedStyle(block)
    .getPropertyValue("left"));


    var blockTop = parseInt(window
    .getComputedStyle(block).getPropertyValue("top"));

    var blockHeight = block.clientHeight;

    var block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
    
    var block2Top = parseInt(window.getComputedStyle(block2).getPropertyValue("top"));

    var block2Height = block2.clientHeight;

    if((characterLeft == blockLeft && blockTop <500 && blockTop + blockHeight >400)
    ||(characterLeft == block2Left && block2Top <500 && block2Top + block2Height >400))
    {
        alert("Game Over! Score: "+ (counter+counter2));
        block.style.animation = "none";
        block2.style.animation = "none";
        block2.style.display = "none";
        startButton.style.display = "block";
    }

    },50);

    function differentSize(block)
    {

        var random =Math.floor(Math.random() *5);
        let newHeight;
        if(random < 3)
        {
            let newHeight = (random+1) * 100;

        }
        else
        {
            let newHeight = 100;
            
        }
        
        block.style.height = newHeight +"px";
        udpadteHeight(block, newHeight);

    }



    function udpadteHeight(block, newHeight)
    {
        if (block.id === "block2")
        {
        block2Height = newHeight;
        }
        else 
        {
            blockHeight = newHeight;
        }
    }



    function getHeight(){
        return blockHeight;

    }

    function getHeight2(){
        return block2Height;

    }


