window.onload = function(){};

tikTakBoom.init(
    tasks,
    document.querySelector('#timerField'),
    document.querySelector('#gameStatusField'),
    document.querySelector('#questionField'),
    document.querySelector('#answer1'),
    document.querySelector('#answer2'),
    document.querySelector('#answer3'),
    document.querySelector('#answer4'),
    title,
);

startButton.addEventListener("click", () => {
    startGame();
    
});

finishButton.addEventListener("click", ()=> {
    tikTakBoom.finish('lose');
});

reset.addEventListener('click', () => {
    startGame();
});




