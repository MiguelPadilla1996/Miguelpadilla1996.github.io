const wordContainer = document.getElementById('wordContainer'); 
const startButton = document.getElementById('startButton');
const usedLettersElement = document.getElementById('usedLetters');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.height = 0;

const bodyParts = [
    [4, 2, 1, 1],
    [4, 3, 1, 2],
    [3, 5, 1, 1],
    [5, 5, 1, 1],
    [3, 3, 1, 1],
    [5, 3, 1, 1]
];

let selectedWord = [];
let usedLetters = [];
let mistakes = 0;
let hits = 0;

const addLetter = letter => {
    const letterElement = document.createElement('span');
    letterElement.textContent = letter.toUpperCase();
    usedLettersElement.appendChild(letterElement);
};

const addBodyPart = part => {
    ctx.fillStyle = '#FFF';
    ctx.fillRect(...part);
};

const endGame = (win = false) => {
  document.removeEventListener('keydown', letterEvent);
  startButton.style.display = 'block';

  if (win) {
    swal("🎉 ¡Ganaste!", "Has adivinado la palabra correctamente.", "success");
  } else {
    swal("💀 ¡Perdiste!", `La palabra era: ${selectedWord.join('')}`, "error");
  }
};


const correctLetter = letter => {
  const { children } = wordContainer;
  for (let i = 0; i < children.length; i++) {
    if (children[i].innerHTML === letter) {
      children[i].classList.remove('hidden');
      hits++;
    }
  }

  if (hits === selectedWord.length) {
    endGame();
    swal({
      title: "¡Buen trabajo!",
      text: "Felicidades, has ganado 🎉",
      icon: "success",
      button: "Seguir jugando"
    });
  }
};

const wrongLetter = () => {
  addBodyPart(bodyParts[mistakes]);
  mistakes++;
  if (mistakes === bodyParts.length) {
    endGame();
    swal({
      title: "¡Has perdido!",
      text: `La palabra era: ${selectedWord.join('')}`,
      icon: "error",
      button: "Volver a intentar"
    });
  }
};

const letterInput = letter => {
    if (selectedWord.includes(letter)) {
        correctLetter(letter);
    } else {
        wrongLetter();
    }
    addLetter(letter);
    usedLetters.push(letter);
};

const letterEvent = event => {
    const newLetter = event.key.toUpperCase();
    if (/^[A-ZÑ]$/.test(newLetter) && !usedLetters.includes(newLetter)) {
        letterInput(newLetter);
    }
};

const drawWord = () => {
  wordContainer.innerHTML = "";
  selectedWord.forEach(letter => {
    const letterElement = document.createElement('span');
    letterElement.textContent = letter.toUpperCase();
    letterElement.classList.add('letter', 'hidden');
    wordContainer.appendChild(letterElement);
  });
};

const selectRandomWord = () => {
  if (!Array.isArray(words) || words.length === 0) {
    alert("❌ La lista de palabras no está definida");
    return;
  }
  const palabra = words[Math.floor(Math.random() * words.length)];
  selectedWord = palabra.toUpperCase().split('');
};


const drawHangman = () => {
    ctx.canvas.width = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d95d39';
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
};

const startGame = () => {
    usedLetters = [];
    mistakes = 0;
    hits = 0;
    wordContainer.innerHTML = '';
    usedLettersElement.innerHTML = '';
    startButton.style.display = 'none';

    drawHangman();
    selectRandomWord();
    drawWord();

    document.addEventListener('keydown', letterEvent);
};

startButton.addEventListener('click', startGame);
