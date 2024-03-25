// Primeiro vamos evitar que o submit seja carregado. Para tanto pegamos o fomulario e criamos uma função com eventlistiner que evitará o submit usando o fomu que vc capturou com o query

const formu = document.querySelector("#formu");

// funçao com event, o evento tem que esta entre ""
formu.addEventListener("submit", (event) => {
  event.preventDefault(); //ele cancela o evento submit
  let inputAltura = event.target.querySelector("#altura")// captiruando todo conteudo de altura
  let inputPeso = event.target.querySelector("#peso")// captiruando todo conteudo de peso
  let peso = Number(inputPeso.value)// pegando o valor de peso
  let altura = Number(inputAltura.value)// pegando o valor de altura

  // Se o numero for falso retornar uma mensagem de falso para setResul e declara ele como falso
  if(!peso){
    
    setResul("Valor invalido - peso", false)
    return;// o return enterrompe tdo que esta abaixo dele
  }
  if(!altura){
    setResul("Valor invalido - altura", false)
    return;
  }



  let imc = getIMC(peso,altura)// passando o return da função get imc para a variavel imc
  let nivelIMC = getNivelIMC (imc)// variavel que pega mensagem de imc

  setResul(`O resultado é ${nivelIMC}: IMC  - ${imc}`,true)

});

// função para calcular imc
function getIMC (peso,altura){
  let cal = peso / altura **2
  return cal.toFixed(2); // retornando somente o resultado do imc ja com 2 casas decimais
}

// funçao para retornar o nivel do imc
function getNivelIMC (imc){
  const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2',
  'Abesidade grau 3'] // array com mensagens de imc
  
  // sequencia de if com return que coleta o index do array e retorna o valor
  if(imc > 40){
    return nivel [5];
  }
  if(imc >= 35){
    return nivel [4];
  }
if(imc >= 30){
    return nivel [3];
  }
if(imc >= 25){
    return nivel [2];
  }
if(imc >= 18.5){
    return nivel [1];
  }
if(imc < 18.5){
    return nivel [0];
  }
}

// agora vamos criar uma função que ao tocar no botão enviar aparecça uma mensagem. O enviar deve ser feito na função acima(formu) ja com a mensagem, usando o setResul passamso o valor teste para o parametro msg. Nessa função de baixo vamos criar so o mecanismo de envio do texto gerado no formu para o html.

// function setResul(msg) {
//   let resultado = document.querySelector("#resultado");
//   resultado.innerHTML = `<p>${msg}</p>`;
// }

// funçao so para criar o paragrafo
function setParagrafo(className) {
  const p = document.createElement("p"); //Criando um novo elemento, o que esta dentro de "" são tags html
 
  return p;
}

// Outra maneira de enviar o conteudo: inserir um elemento diretamente no html. Para tanto vamos criar a variavel paragrafo que vai receber um docuent com o valor que sera trabalhado

function setResul(msg,isValid) {
  let resultado = document.querySelector("#resultado-html");
  resultado.innerHTML = "";

  const p = setParagrafo()
  
  p.innerHTML = msg

  if(!isValid){
      p.classList.add('bad-html'); //Add um nome de classe a tag p caso valor de altura e peso falso

  }else{
    p.classList.add('verdadeiro-html')
  }
 

  resultado.appendChild(p)

}

// PAREI EM 35 MINUTOS
