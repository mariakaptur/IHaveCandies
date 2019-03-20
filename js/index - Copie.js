console.log('js ready !');

var computerDecision;


function onClickLeftHand() {
    leftHand.classList.add('handChanged');

    switch (computerDecision) {
        case 'left paw':
            printResult.classList.remove('hide');
            printResult.textContent = 'You win !';

            rightHand.removeEventListener('click', onClickRightHand);
            break;
        case 'right paw':
            rightHand.classList.add('missingCandyFloatRight');
            leftHand.classList.add('hide');

            printResult.classList.remove('hide');
            printResult.textContent = 'You loose !';

            //$("#leftHand").click(function(){  !!! QUESTION !!
                //$("#explanation").fadeIn();

            explanation.classList.remove('hide');
            explanation.textContent = 'The candy was in the right paw !';

            rightHand.removeEventListener('click', onClickRightHand);
            break;
        case 'both paws':
            rightHand.classList.remove('hide');
            printResult.classList.remove('hide');
            printResult.textContent = 'You win !';
            rightHand.classList.add('missingCandyRight');
            explanation.classList.remove('hide');
            explanation.textContent = 'There was a candy in each paw !';

            rightHand.removeEventListener('click', onClickRightHand);
            break;
        case 'no candy':
            leftHand.classList.add('hide');
            printResult.classList.remove('hide');
            printResult.textContent = 'You loose !';
            explanation.classList.remove('hide');
            explanation.textContent = 'There were no candies at all !';
            break;
    }
    setTimeout(() => location.reload(), 3000);

}

function onClickRightHand() {
    rightHand.classList.add('handChanged');
    switch (computerDecision) {
        case 'left paw':
            rightHand.classList.add('hide');
            leftHand.classList.add('missingCandyFloatLeft');
            printResult.classList.remove('hide');
            printResult.textContent = 'You loose !';

            explanation.classList.remove('hide');
            explanation.textContent = 'The candy was in the left paw !';

            leftHand.removeEventListener('click', onClickLeftHand);

            printCounter.classList.remove('hide');
            counter = window.setInterval(showCounter, 1000);
            showCounter();
            break;
        case 'right paw':
            printResult.classList.remove('hide');
            printResult.textContent = 'You win !';

            leftHand.removeEventListener('click', onClickLeftHand);

            printCounter.classList.remove('hide');
            counter = window.setInterval(showCounter, 1000);
            showCounter();
            break;
        case 'both paws':
            leftHand.classList.remove('hide');
            printResult.classList.remove('hide');
            printResult.textContent = 'You win !';
            leftHand.classList.add('missingCandyLeft');

            explanation.classList.remove('hide');
            explanation.textContent = 'There was a candy in each paw !';

            leftHand.removeEventListener('click', onClickLeftHand);

            printCounter.classList.remove('hide');
            counter = window.setInterval(showCounter, 1000);
            showCounter();
            break;
        case 'no candy':
            rightHand.classList.add('hide');
            printResult.classList.remove('hide');
            explanation.classList.remove('hide');

            printResult.textContent = 'You loose !';
            explanation.textContent = 'There were no candies at all !';

            printCounter.classList.remove('hide');
            counter = window.setInterval(showCounter, 1000);
            showCounter();

            break;
    }
    setTimeout(() => location.reload(), 3000);

}

function showCounter() {
    if (counter >= 0) {
        printCounter.textContent = (counter--);
        console.log(counter);
    } else {window.clearInterval(counter)}
}

document.addEventListener('DOMContentLoaded', function () {


    // Sélection de l'élément canvas
    counter = 3;

    computerDecision = Math.random();
    if (computerDecision < 1 / 4) {
        computerDecision = 'left paw';
        console.log('computer:left')
    } else if (computerDecision > 1 / 4 && computerDecision < 1 / 2) {
        computerDecision = 'right paw';
        console.log('computer:right')
    } else if (computerDecision > 1 / 2 && computerDecision < 3 / 4) {
        computerDecision = 'both paws';
        console.log('computer:both')
    } else {
        computerDecision = 'no candy';
        console.log('computer:none')
    }

    leftHand = document.querySelector('#leftHand');
    rightHand = document.querySelector('#rightHand');
    printResult = document.querySelector('#printResult');
    explanation = document.querySelector('#explanation');
    printCounter = document.querySelector('#printCounter');
    //compteur = document.querySelector('#compteur');


    // Installation du gestionnaire d'événement au clic sur le canvas
    leftHand.addEventListener('click', onClickLeftHand);
    rightHand.addEventListener('click', onClickRightHand);
});