// Primeiro vamos evitar que o submit seja carregado. Para tanto pegamos o fomulario e criamos uma função com eventlistiner que evitará o submit usando o fomu que vc capturou com o query

const formu = document.querySelector("#formu");

// funçao com event, o evento tem que esta entre ""
formu.addEventListener("submit", (event) => {
  event.preventDefault(); //ele cancela o evento submit
  console.log("evento submit cancelado");
  setResul("Teste");
});

// agora vamos criar uma função que ao tocar no botão enviar aparecça uma mensagem. O enviar deve ser feito na função acima(formu) ja com a mensagem, usando o setResul passamso o valor teste para o parametro msg. Nessa função de baixo vamos criar so o mecanismo de envio do texto gerado no formu para o html.

// function setResul(msg) {
//   let resultado = document.querySelector("#resultado");
//   resultado.innerHTML = `<p>${msg}</p>`;
// }

function setParagrafo(className) {
  const p = document.createElement("p"); //Criando um novo elemento, o que esta dentro de "" são tags html
  p.classList.add(className); //Add um nome de classe a tag p
  return p;
}

// Outra maneira de enviar o conteudo: inserir um elemento diretamente no html. Para tanto vamos criar a variavel paragrafo que vai receber um docuent com o valor que sera trabalhado

function setResul(msg) {
  let resultado = document.querySelector("#resultado-html");
  resultado.innerHTML = "";
}

// PAREI EM 24 MINUTOS
