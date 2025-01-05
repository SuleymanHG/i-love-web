// Stap 1: zoek de input en stop die in een variabele
let inputElement = document.querySelector('input');

// Stap 2: luister naar het invalid event, en wacht tot dat afgevuurd wordt..
inputElement.addEventListener('invalid', function(ev) {

  // Stap 3: pas de tekst in de validatiemelding aan
  inputElement.setCustomValidity('Dit veld mag niet leeg zijn hoor..');

});
