var numberToGuess = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess() {
    var guess = document.getElementById('guess').value;
    var message = '';

    if (attempts >= 5) {
        message = 'Você excedeu o limite de tentativas. O número era ' + numberToGuess + '.';
        resetGame();
    } else if (guess == numberToGuess) {
        message = 'Parabéns! Você acertou!';
        resetGame();
    } else if (guess > numberToGuess) {
        message = 'O número é muito grande, tente novamente';
    } else if (guess < numberToGuess) {
        message = 'O número é muito baixo, tente novamente';
    } else {
        message = 'Desculpe, tente novamente.';
    }

    attempts++;

    document.getElementById('message').textContent = message;
}

function clearMessage() {
    document.getElementById('message').textContent = '';
}

function resetGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('restartMessage').textContent = 'O jogo foi reiniciado!';
    setTimeout(function() {
        document.getElementById('restartMessage').textContent = '';
    }, 3000);  // Remove a mensagem após 3 segundos
}
