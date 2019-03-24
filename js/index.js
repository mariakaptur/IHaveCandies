console.log('js ready !');

var computerDecision;


function onClickHand(event) {
    rightHand.removeEventListener('click', onClickHand);
    leftHand.removeEventListener('click', onClickHand);
    numberTries.classList.remove('hide');
    clickCount.textContent = (clickCounter += 1);
    let hand = '';
    if (event.target === leftHand) {
        hand = 'left';

    } else {
        hand = 'right';
    }

    let won = false;
    let msg = '';

    explanation.classList.remove('hide');

    //YOU WIN, BOTH HANDS
    if (computerDecision === 'both') {
        won = true;
        msg = 'There was a candy in each paw !';
        numberCandies.classList.remove('hide');
        dogImg.classList.add('imageHappy');
        candyCount.textContent = (candiesCounter += 1);

        switch (hand) {
            case 'right':
                rightHand.classList.add('handChanged');
                leftHand.classList.add('missingCandyLeft');
                leftHand.removeEventListener('click', onClickHand);
                break;
            case 'left':

                leftHand.classList.add('handChanged');
                rightHand.classList.add('missingCandyRight');
                rightHand.removeEventListener('click', onClickHand);
                break;
        }

        //SORRY, NO CANDIES
    } else if (computerDecision === 'none') {
        won = null;
        msg = 'There were no candies at all !';
        rightHand.className = '';
        leftHand.className = '';
        dogImg.classList.add('imageShame');

        //YOU WIN
    } else if (computerDecision === hand) {
        won = true;
        numberCandies.classList.remove('hide');
        candyCount.textContent = (candiesCounter += 1);
        switch (hand) {
            case 'right':
                rightHand.classList.add('handChanged');
                leftHand.removeEventListener('click', onClickHand);
                break;
            case 'left':
                leftHand.classList.add('handChanged');
                rightHand.removeEventListener('click', onClickHand);
                break;
        }
        //YOU LOOSE
    } else {
        msg = 'The candy was in the ' + computerDecision + ' paw !';
        switch (computerDecision) {
            case 'right':
                rightHand.classList.add('missingCandyRight');
                rightHand.removeEventListener('click', onClickHand);
                break;
            case 'left':
                leftHand.classList.add('missingCandyLeft');
                leftHand.removeEventListener('click', onClickHand);
                break;
        }
    }

    printResult.classList.remove('hide');
    if (won === false) {
        printResult.textContent = 'You loose';
    } else if (won === true) {
        printResult.textContent = 'You win'
    } else {
        printResult.textContent = 'Sorry !'
    }

    explanation.textContent = msg;
    showCounter();

    function showCounter() {
        printCounter.classList.remove('hide');
        interval_id = window.setInterval(setCounter, 1000);
        setCounter();
    }

    setTimeout(function () {
        newComputerDecision();
        initializeGameScreen();
        leftHand.addEventListener('click', onClickHand);
        rightHand.addEventListener('click', onClickHand);
        printCounter.classList.add('hide');
        printResult.classList.add('hide');
        explanation.classList.add('hide');
        $('.instruction').fadeOut('slow');
        counter = 3;
    }, 3100);


    function setCounter() {
        if (counter > 0) {
            printCounter.textContent = (counter--);
            console.log(counter);
        } else {
            window.clearInterval(interval_id)
        }
    }

    function newComputerDecision() {
        computerDecision = Math.random();
        if (computerDecision < 1 / 4) {
            computerDecision = 'left';
            console.log('computer:left')
        } else if (computerDecision > 1 / 4 && computerDecision < 1 / 2) {
            computerDecision = 'right';
            console.log('computer:right')
        } else if (computerDecision > 1 / 2 && computerDecision < 3 / 4) {
            computerDecision = 'both';
            console.log('computer:both')
        } else {
            computerDecision = 'none';
            console.log('computer:none')
        }
    }

    function initializeGameScreen() {
        dogImg.className = 'imageStatic';
        rightHand.className = '';
        leftHand.className = '';
    }

    function candyCounter() {

    }
}

// TODO Implement candy counter

document.addEventListener('DOMContentLoaded', function () {


    computerDecision = Math.random();
    if (computerDecision < 1 / 4) {
        computerDecision = 'left';
        console.log('computer:left')
    } else if (computerDecision > 1 / 4 && computerDecision < 1 / 2) {
        computerDecision = 'right';
        console.log('computer:right')
    } else if (computerDecision > 1 / 2 && computerDecision < 3 / 4) {
        computerDecision = 'both';
        console.log('computer:both')
    } else {
        computerDecision = 'none';
        console.log('computer:none')
    }

    // Sélection de l'élément canvas
    counter = 3;
    clickCounter = 0;
    candiesCounter = 0;

    leftHand = document.querySelector('#leftHand');
    rightHand = document.querySelector('#rightHand');
    dogImg = document.querySelector('#dogImg');
    printResult = document.querySelector('#printResult');
    explanation = document.querySelector('.explanation');
    printCounter = document.querySelector('#printCounter');
    candyCount = document.querySelector('#candyCount');
    clickCount = document.querySelector('#clickCount');
    numberTries = document.querySelector('#numberTries');
    numberCandies = document.querySelector('#numberCandies');
    instruction = document.getElementsByClassName('.instruction');
    //compteur = document.querySelector('#compteur');


    // Installation du gestionnaire d'événement au clic sur le canvas
    leftHand.addEventListener('click', onClickHand);
    rightHand.addEventListener('click', onClickHand);
    leftHand.addEventListener('touch', onClickHand);
    rightHand.addEventListener('touch', onClickHand);
});