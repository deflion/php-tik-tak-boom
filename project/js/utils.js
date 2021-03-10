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
const checkJSON = (json) =>{
    let ans = JSON.parse(json);
    let massage = ""
    
    if (ans.length < 30) massage += `Вопросов должно быть не меньше 30<hr>`;

    for (let i = 0; i < ans.length; i++){

        let error = false;
        let arr = [];
        let msg ="";

        msg += `Вопрос ${i+1}: `;

        if (ans[i].question == ""){
            msg += `Вопрос отсутствует.<br>`;
            error = true;
        }

        for (let j = 0; j < 5; j++){
            if (ans[i][`answer${j+1}`]){
                if (ans[i][`answer${j+1}`].value == ""){
                    msg +=`Ответ ${j+1} отсутствует <br>`;
                    error = true;
                } 

                arr[j] = ans[i][`answer${j+1}`].result
            }
        }
        
        answer = arr.reduce((res, sum) => {
            res[sum] ? res[sum]++ : res[sum] = 1;
            return res;
        },{});

        if (answer["true"] > 1){
            msg +=`Более одного правильного ответа <br>`
            error = true;
        }

        if (error === true){
            massage += `${msg} <hr>`

        } else{ 
            msg = "";
        }
    }

    return massage;
    
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
    
    countdownTimer(5); //Задать время первичного отсчета

    tikTakBoom.rightAnswers = 0;
};
