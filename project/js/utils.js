const display = (name, display) =>{
    return name.setAttribute('style', `display:${display}`);
} 

const randomIntNumber = (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

const countdownTimer = (time) => {
    display(countdownSpan, 'flex');
    display(startButton, 'none');

    if (time > 0) {
        countdownSpan.innerHTML = `${time}`;
        time -= 1;
        setTimeout(countdownTimer, 1000, time);
    }  else {
        tikTakBoom.run();
        
        display(finishButton, 'block');
        display(gameCard, 'flex');
        display(countdownSpan, 'none');
        title.innerHTML = "Тик-так бум через...";
    }

};


// var btn = document.querySelector('.btn');
// var blockHidden = document.querySelector('.block');

//  btn.addEventListener('click', () => {
//  		setTimeout(
//   	blockHidden.classList.add('b-show'
//    	),1000);
//  }); 