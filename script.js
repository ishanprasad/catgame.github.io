score = 0;
cross = true;

audio = new Audio('bgm.mp3');
audiogo = new Audio('go.mp3');
audiogomusic = new Audio('gomusic.wav');
audiojump = new Audio('jump.mp3')
audiobark = new Audio('bark.mp3');

    audio.play();

document.addEventListener('keydown', function(e){
    if(e.keyCode==32){
        hero = document.querySelector('.hero');
        hero.classList.add('animatehero');
        audiojump.play();
        setTimeout(() => {
            hero.classList.remove('animatehero')
        }, 600);
    }
    if(e.keyCode==39){
        hero = document.querySelector('.hero');
        heroX = parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
        hero.style.left = heroX + 112 + "px";
    }
    if(e.keyCode==37){
        hero = document.querySelector('.hero');
        heroX = parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
        hero.style.left = (heroX - 112) + "px";
    }
})
setInterval(() => {
    hero = document.querySelector('.hero');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    obstacle2 = document.querySelector('.obstacle2');

    dx = parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(hero,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
  
    fx = parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
    fy = parseInt(window.getComputedStyle(hero,null).getPropertyValue('top'));

    px = parseInt(window.getComputedStyle(obstacle2,null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(obstacle2,null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    offsetF = Math.abs(fx-px);
    offsetP = Math.abs(fy-py);

    console.log(offsetX, offsetY);
    console.log(offsetF, offsetP);

    if(offsetX< 113 && offsetY< 124){
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleani');
        obstacle2.classList.remove('obstacle2ani');
        audiogo.play();
        audiogomusic.play();
        setTimeout(() => {
            audio.pause();
        }, 1000);
        setTimeout(() => {
            audiogo.pause();
        }, 1000);
    }
    else if(offsetX<145 && cross){
        score+=100;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
    else if(offsetF<113 && offsetP< 124){
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleani');
        obstacle2.classList.remove('obstacle2ani');
        
        audiogomusic.play();
        audiobark.play();
        setTimeout(() => {
            audio.pause();
        }, 0);
        
        setTimeout(() => {
            audiobark.pause(); 
        }, 2000);
    }
    else if(offsetF<145 && cross){
        score+=100;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }

}, 100);
            function updateScore(score){
                scorecont.innerHTML = "Your Score: " + score;
            }