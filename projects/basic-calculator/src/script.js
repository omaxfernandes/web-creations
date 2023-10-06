// Seleciona todos os elementos <button> na página HTML e os armazena em uma variável.
const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

// Itera sobre todos os botões e adiciona um ouvinte de eventos de clique a cada um deles.
for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    // Obtém o valor do botão que foi clicado.
    const buttonValue = buttonsEl[i].textContent;

    // Verifica se o botão clicado é "C" para limpar o campo de entrada.
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      // Se o botão clicado for "=", calcula o resultado.
      calculateResult();
    } else {
      // Caso contrário, anexa o valor do botão ao campo de entrada.
      appendValue(buttonValue);
    }
  });
}

// Função para limpar o campo de entrada.
function clearResult() {
  inputFieldEl.value = "";
}

// Função para calcular o resultado da expressão no campo de entrada usando a função eval().
function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

// Função para anexar o valor do botão ao campo de entrada.
function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
  //   inputFieldEl.value = inputFieldEl.value + buttonValue;
}
