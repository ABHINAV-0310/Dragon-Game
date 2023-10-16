score=0;
cross=true;

audio = new Audio("music.mp3");
setTimeout(() => {
    //audio.play();
}, 1000);

audiogo = new Audio("gameover.mp3");
// Behaviour of Player when pressed uparrow key
document.onkeydown = function (e) {
    console.log(e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => { // setTimeout() is for deciding ending time i.e- 700 ms in this case.
            dino.classList.remove('animateDino');
        }, 700)
    }
    if (e.keyCode==39)
    {
        dino=document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 120 + "px"; 
    }
    if (e.keyCode==37)
    {
        dino=document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px"; 
    }
}

// setinterval() tells the interval of behaviour.
setInterval(() => {
    player = document.querySelector('.dino');
    gameover = document.querySelector('.over');
    opponent = document.querySelector('.dragon');
    By = document.querySelector('.name');
    // getcomputedstyle() will give the current computed value of the property given in getpropertyvalue.
    dx = parseInt(window.getComputedStyle(player, null).getPropertyValue('left')); // Here, it will tell current value of left of dino.
    dy = parseInt(window.getComputedStyle(player, null).getPropertyValue('top')); // Here it will tell current value of top of dino.
    ox = parseInt(window.getComputedStyle(opponent, null).getPropertyValue('left')); // Here, it will tell current value of left of dragon.
    oy = parseInt(window.getComputedStyle(opponent, null).getPropertyValue('top')); // Here, it will tell current value of top of dragon.

    X_diff = Math.abs(dx - ox);
    y_diff = Math.abs(dy - oy);

    // console.log(X_diff,y_diff)
    if (X_diff < 73 && y_diff < 52) {
        gameover.innerHTML="Game Over - Reload to Play Again";
        By.style.visibility="hidden";
        opponent.classList.remove('dragonani')
        cross=false;
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
        }, 1000);
        audio.pause();
    }
    else if(X_diff < 145 && cross){
        score += 1;
        updatescore(score)
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);

        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(opponent, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.1;
            opponent.style.animationDuration = newdur + 's';
        }, 500);
    }
}, 10);

function updatescore(score){
    score_count.innerHTML="Your score: " + score;
}