const randomIntNumber = (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

// 
const display = (name, display) =>{
    return name.setAttribute('style', `display:${display}`);
} 

// 
const checkInput = (input, min, max) => {
    if (input.value != "") {
        if (input.value <= max && input.value >= min) {
            return input.value; 
        } else if (input.value > max) {
            return max;
        } else if (input.value < min) {
            return min;
        }
    } else {
        return  min;
    }
}

// 
const countdownTimer = (time) => {
    display(countdownSpan, 'flex');
    display(startButton, 'none');

    if (time > 0) {
        countdownSpan.innerHTML = `${time}`;
        time -= 1;
        setTimeout(countdownTimer, 1000, time);
    } else {
        tikTakBoom.run();
        display(finishButton, 'block');
        display(gameRow, 'flex');
        display(gameCard, 'block')
        display(countdownSpan, 'none');
        display(finishCol, 'block');
        title.innerHTML = "Тик-так бум через...";
    }

    display(resetCol,"none");
};


// 
const startGame = () => {

    tikTakBoom.countOfPlayers = checkInput(playerCount, 2,4);
    tikTakBoom.needRightAnswers = checkInput(answerCount, 3,30);
    tikTakBoom.boomTimer = checkInput(timeCount, 10,100);

    display(firstScreen, 'none');
    display(dropdownLink, 'none');

    countdownRow.classList.remove("hidden");
    dropdownMenu.classList = "dropdown-menu";

    title.innerHTML = "Игра начнется через...";
    
    countdownTimer(1); 

    tikTakBoom.rightAnswers = 0;
};
