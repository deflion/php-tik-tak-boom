tikTakBoom = {
    init(
        tasks,
        timerField,
        gameStatusField,
        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2,
        textFieldAnswer3,
        textFieldAnswer4,
        title
    ) {
        this.boomTimer = 30;
        this.countOfPlayers = 2;
        this.tasks = JSON.parse(tasks);

        this.timerField = timerField;
        this.gameStatusField = gameStatusField;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;
        this.textFieldAnswer3 = textFieldAnswer3;
        this.textFieldAnswer4 = textFieldAnswer4;
        this.title = title;

        this.needRightAnswers = 2;
    },

    run() {
        this.state = 1;

        this.rightAnswers = 0;

        this.turnOn();

        this.timer();
    },

    turnOn() {
        const taskNumber = randomIntNumber(this.tasks.length - 1);
        
        this.gameStatusField.innerText += ` Вопрос №${this.state} из категории ${this.tasks[taskNumber]["type"]}`;
        this.printQuestion(this.tasks[taskNumber]);

        this.tasks.splice(taskNumber, 1);

        this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;
    },

    turnOff(value) {
        if (this.currentTask[value].result) {
            this.gameStatusField.innerText = 'Верно!';
            this.rightAnswers += 1;
            this.boomTimer += 5;
            addTime.innerText = "+5 сек.";
            addTime.classList.add('b-hide');
            setInterval(() => {
                addTime.classList.remove('b-hide');
            }, 1100);

        } else {
            this.gameStatusField.innerText = 'Неверно!';
            this.boomTimer -= 5;
            addTime.innerText = "-5 сек.";
            addTime.classList.add('b-hide');
            setInterval(() => {
                addTime.classList.remove('b-hide');
            }, 1100);
        }

        if (this.rightAnswers < this.needRightAnswers) {
            if (this.tasks.length === 0) {
                this.finish('lose');
            } else {
                this.turnOn();
            }
        } else {
            this.finish('won');
        }

        this.textFieldAnswer1.removeEventListener('click', answer1);
        this.textFieldAnswer2.removeEventListener('click', answer2);
    },

    printQuestion(task) {
        this.textFieldQuestion.innerText = task.question;
        this.textFieldAnswer1.innerText = task.answer1.value;
        this.textFieldAnswer2.innerText = task.answer2.value;
        if (task.answer3) {
            this.textFieldAnswer3.classList.remove('hidden');
            this.textFieldAnswer3.innerText = task.answer3.value;
            this.textFieldAnswer3.addEventListener('click', answer3 = () => this.turnOff('answer3'));
        } else {
            this.textFieldAnswer3.classList.add('hidden');
            this.textFieldAnswer3.removeEventListener('click', answer3);
        }

        if (task.answer4) {
            this.textFieldAnswer4.classList.remove('hidden');
            this.textFieldAnswer4.innerText = task.answer4.value;
            this.textFieldAnswer4.addEventListener('click', answer4 = () => this.turnOff('answer4'));
        } else {
            this.textFieldAnswer4.classList.add('hidden');
            this.textFieldAnswer4.removeEventListener('click', answer4);
        }
        

        this.textFieldAnswer1.addEventListener('click', answer1 = () => this.turnOff('answer1'));
        this.textFieldAnswer2.addEventListener('click', answer2 = () => this.turnOff('answer2'));

        this.currentTask = task;
    },

    finish(result = 'lose') {
       
        this.state = 0;
        if (result === 'lose') {
            this.title.innerText = `Вы проиграли!`;
        }

        if (result === 'won') {
            this.title.innerText = `Вы выиграли!`;
        }

        display(gameCard,"none")
        display(finishButton, "none")
        display(dropdownLink, 'block');
        display(resetCol,"block");
        
        this.gameStatusField.innerText = ``;
        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;
        this.textFieldAnswer3.innerText = ``;
        this.textFieldAnswer4.innerText = ``;

        this.boomTimer = 0;

        console.log(this);
    },

    timer() {
        if (this.state) {
            this.boomTimer -= 1;
            let sec = this.boomTimer % 60;
            let min = (this.boomTimer - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;

            if (this.boomTimer > 0) {
                setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose');
            }
        }
    },
}
