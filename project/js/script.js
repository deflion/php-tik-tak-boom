window.onload = function(){

    display(gameCard,'none');
    display(countdownSpan,'none');
    display(finishButton,'none');
        
};

tikTakBoom.init(
    tasks,
    document.querySelector('#timerField'),
    document.querySelector('#gameStatusField'),
    document.querySelector('#questionField'),
    document.querySelector('#answer1'),
    document.querySelector('#answer2'),
    document.querySelector('#answer3'),
    document.querySelector('#answer4'),
    finishButton,
);

startButton.addEventListener("click", () => {
    

    if (playerCount.value != "") {
        if (playerCount.value <=4 && playerCount.value > 2) {
            tikTakBoom.countOfPlayers = playerCount.value; 
        }
    } else {
        tikTakBoom.countOfPlayers = 2;
        alert('Игроков должно быть не более 4\n По умолчанию количетсво игроков: 2');
    };

    if ( timeCount.value != ""){
        tikTakBoom.boomTimer = parseInt(timeCount.value);
    } else {
        tikTakBoom.boomTimer = 30;
    };

    display(firstScreen, 'none');
    display(dropdown, 'none');

    title.innerHTML = "Игра начнется через...";

    
    countdownTimer(2); 
    
});

finishButton.addEventListener("click", ()=> {
    tikTakBoom.finish('lose')
});


settingLink.addEventListener("click", () => {
    let dropdown = document.querySelector('.dropdown-menu');

    dropdown.className.includes("show") ? dropdown.classList.remove("show") : dropdown.classList.add("show");;
})




