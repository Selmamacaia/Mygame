let numero = Math.floor(Math.random() * 10) + 1;
let multiplicador = Math.floor(Math.random() * 10) + 1;
let respostaCorreta = numero * multiplicador;

document.getElementById('pergunta').textContent = 'Quanto é ' + numero + ' x ' + multiplicador + '?';

function verificarResposta() {
    let respostaUsuario = document.getElementById('resposta').value;
    let resultado = '';

    if (respostaUsuario == respostaCorreta) {
        resultado = 'Parabéns! Você acertou!';
    } else {
        resultado = 'Desculpe, a resposta correta era ' + respostaCorreta;
    }

    // Gerar a tabuada completa
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada += numero + ' x ' + i + ' = ' + numero * i + '<br>';
    }

    document.getElementById('resultado').innerHTML = resultado + '<br><br>' + tabuada;

    // Gerar uma nova pergunta
    numero = Math.floor(Math.random() * 10) + 1;
    multiplicador = Math.floor(Math.random() * 10) + 1;
    respostaCorreta = numero * multiplicador;
    document.getElementById('pergunta').textContent = 'Quanto é ' + numero + ' x ' + multiplicador + '?';
    document.getElementById('resposta').value = '';
}

function apagarTabuada() {
    document.getElementById('resultado').textContent = '';
}
