const input = document.getElementById('input-text');
const enterButton = document.getElementById('turn-to-number-of-vowels');
const outcomeDiv = document.getElementById('the-vowels');

document.addEventListener('click', (event) => {
  if (event.target.matches('#turn-to-number-of-vowels')) {
    let textInput = input.value.toLowerCase();
    let arrayOfLetters = [];
    let numberOfVowels = 0;

    arrayOfLetters.splice(0, arrayOfLetters.length);

    for (let i = 0; i < textInput.length; i++) {
      arrayOfLetters.push(textInput[i]);
    }

    arrayOfLetters = arrayOfLetters.filter(letter => letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u");

    numberOfVowels = arrayOfLetters.length;

    numberOfVowels > 1 ? outcomeDiv.innerText =`There are ${numberOfVowels}` : outcomeDiv.innerText =`There is ${numberOfVowels}`;
  }
})