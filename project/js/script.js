window.onload = function(){
    if (checkJSON(tasks) != ""){
        document.querySelector('.error_message').innerHTML = checkJSON(tasks);
        document.querySelector('.errors').classList.add('show');
        display(startButton,"none");
        document.querySelector('.support').classList.remove('hidden');
    }
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
);

startButton.addEventListener("click", () => {
    startGame();
});

finishButton.addEventListener("click", ()=> {
    tikTakBoom.finish('lose');
});

reset.addEventListener('click', () => {
    // startGame();
    window.location.reload()
});




