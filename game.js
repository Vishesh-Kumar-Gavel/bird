var running = true;
var parentDiv = document.getElementById("outerbox");
var gameover = document.getElementById("gameover");
var restart = document.getElementById("restart");
var scoreboard=document.getElementById('score');
var outerbody=document.getElementById('outerbody');
var childElements = parentDiv.children;
var min = 4;
var max = 35;
var time=0;
var random_number=0;
var birdpos=[];
var score=0;
for(var i=0;i<40;i++)
{
    var pos=document.getElementById("row"+i+"col10");
    birdpos.push(pos);
}
birdcurrpos=17;

function gamerunning() {
    if(running)
    {
        if(time==1)
        {
            random_number = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        for(var j=0;j < childElements.length;j++)
        {
            var parentDiv1=childElements[j];
            var childElements1=parentDiv1.children;
            for (var i = 0; i < childElements1.length - 1; i++) {
                var previousclass = childElements1[i + 1].className;
                if(previousclass=="bird")
                {
                    previousclass="small_box_black";
                }
                if(childElements1[i].className!="red")
                {
                    childElements1[i].className = previousclass;
                }   
            }
            var t=time%15;
            if((t==1 || t==2) && (j<random_number-4 || j>random_number+4))
            {
                childElements1[childElements1.length - 1].className = "small_box_yellow";
            }
            else
            {
                childElements1[childElements1.length - 1].className = "small_box_black";
            }
        }
        time=(time+1)%15;
        score=score+10;
        scoreboard.innerHTML=("score: "+score);
        
    }
}

function play()
{
    if(running)
    {
        birdpos[birdcurrpos].className="small_box_black";
        birdcurrpos++;
        if(birdcurrpos==40 || birdpos[birdcurrpos].className=='small_box_yellow')
        {
            running=false;
            clearInterval(intergamerunning);
            clearInterval(interplay);
            if(birdcurrpos!=40)
            {
                birdpos[birdcurrpos].className='bird';
            }
            parentDiv.style.opacity='0.1';
            gameover.style.display='block';

        }
        else
        {
            birdpos[birdcurrpos].className="bird";
        }  
    }
}

function function_move_up() {
    if (running) {
        var upmotion=5;
        while(upmotion--)
        {
            birdpos[birdcurrpos].className="small_box_black";
            birdcurrpos--;
            if(birdcurrpos<0 || birdpos[birdcurrpos].className=='small_box_yellow')
            {
                running=false;
                clearInterval(intergamerunning);
                clearInterval(interplay);
                if(birdcurrpos<-1)
                {
                    birdpos[birdcurrpos].className='bird';
                }
                parentDiv.style.opacity='0.1';
                gameover.style.display='block';
            }
            else
            {
                birdpos[birdcurrpos].className="bird";
            } 
        }
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === " ") {
        function_move_up();
    }
});

outerbody.addEventListener("click", function() {
    function_move_up();
});


restart.addEventListener('click',()=>{
    parentDiv.style.opacity='1';
    gameover.style.display='none';
    time=0;
    score=0;
    random_number=0;
    birdcurrpos=17;
    for(var j=0;j < childElements.length;j++)
    {
        var parentDiv1=childElements[j];
        var childElements1=parentDiv1.children;
        for (var i = 0; i < childElements1.length - 1; i++) {
            childElements1[i].className = "small_box_black";  
        }
    }
    birdpos[birdcurrpos].className="bird";
    intergamerunning = setInterval(gamerunning, 400);
    interplay = setInterval(play, 200);
    running = true;
})


var intergamerunning = setInterval(gamerunning, 180);
var interplay = setInterval(play, 95);