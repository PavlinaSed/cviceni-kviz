const otazka = document.querySelector('.question')
otazka.textContent = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon."

const odpoved = prompt("Zadej (snad) spravnou odpoved") //koukni na řešení níže to je vice elegantní
const answerTextElement = document.querySelector('.answer__text')
answerTextElement.textContent = odpoved

const answerElement = document.querySelector('.answer')
if (odpoved === 'Bell') { //pozor tady ten bell musí být v uvozovkách
    answerElement.classList.add('answer--correct');
} else{
    answerElement.classList.add('answer--wrong');
}


/*
const questionElm = document.querySelector('.question');
const question =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

questionElm.textContent = question;

const userAnswer = prompt(question);

const answerTextElm = document.querySelector('.answer__text');
answerTextElm.textContent = userAnswer;

const answerElm = document.querySelector('.answer');

if (userAnswer === 'Bell') {
  answerElm.classList.add('answer--correct');
} else {
  answerElm.classList.add('answer--wrong');
}

*/