//const cria uma variável nomeada perguntas e a araay[] armazena as variáveis em grupo e achave {} armazena os dados da variável como propriedade e valor ex. variável celular, propriedades cor, modelo, peso...
const perguntas = [
  {
    pergunta: "Qual é o prato típico brasileiro feito com feijão, carne seca, linguiça, bacon e outras carnes?",
    respostas: [
      "Acarajé",
      "Moqueca",
      "Feijoada",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a fruta principal do doce brasileiro conhecido como 'brigadeiro'?",
    respostas: [
      "Morango",
      "Maracujá",
      "Chocolate",
    ],
    correta: 3
  },
  {
    pergunta: "Que tipo de carne é tradicionalmente usado no prato conhecido como 'churrasco'?",
    respostas: [
      "Peixe",
      "Frango",
      "Carne bovina",
    ],
    correta: 3
  },
  {
    pergunta: "Qual é o nome do prato típico brasileiro composto por camarão, leite de coco, azeite de dendê e outros temperos?",
    respostas: [
      "Coxinha",
      "Vatapá",
      "Escondidinho",
    ],
    correta: 2
  },
  {
    pergunta: "Que tipo de carne é comumente usado na feijoada brasileira?",
    respostas: [
      "Carne de porco",
      "Carne de frango",
      "Carne de cordeiro",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o principal ingrediente da 'paçoca' brasileira?",
    respostas: [
      "Amendoim",
      "Coco",
      "Abóbora",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do pão de queijo, uma comida típica de Minas Gerais?",
    respostas: [
      "Broa",
      "Bolinho de chuva",
      "Coxinha",
    ],
    correta: 3
  },
  {
    pergunta: "Qual é o prato típico brasileiro feito com pedaços de frango, creme de mandioca e queijo coalho?",
    respostas: [
      "Tapioca",
      "Bobó de frango",
      "Vaca atolada",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a bebida típica do Brasil feita da fermentação do suco de cana-de-açúcar?",
    respostas: [
      "Cerveja",
      "Vinho",
      "Cachaça",
    ],
    correta: 3
  },
  {
    pergunta: "Que prato típico brasileiro é feito com massa de farinha de mandioca e recheado com carne-seca, queijo coalho, ou outros ingredientes?",
    respostas: [
      "Pastel",
      "Empadão",
      "Escondidinho",
    ],
    correta: 1
  },
];


//const quiz seçeciona a div com o id quiz
const quiz = document.querySelector('#quiz')

//para pegar a template eu vou utilizar o objeto document, isso vai modelar as informações da template para javascript:
const template = document.querySelector('template')


// new vai criar coisas novas como estrutura de dados ou um tipo de objeto específico, chamdo set, é um conjunto que vai adicionar ou tirar sem repetir o que tem dentro dele.
const corretas = new Set()

//length faz a somatória dos acertos a partir de 1
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos spam")
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
// loop ou laço de repetição
// for entra dentro de uma array, no caso perguntas e pra cada item do array ele faz alguma coisa, pra cada item das perguntas entra no código
for(const item of perguntas) {

    //quizItem é o conteúdo do template cloneNode, clona o conteúdo dentro da template repetindo os nós e os filhos da array template. isso significa que ele vai repetir o conteúdo 
  const quizItem = template.content.cloneNode(true)

//quizItem.querrySelector('h3') muda o conteúdo da pergunta para que ele não repita sempre o mesmo título.
  quizItem.querySelector('h3').textContent = item.pergunta
// roda as perguntas dentro das respostas
  for(let resposta of item.respostas) {
// const dt seleciona o dt dentro da dl e cloneNode faz a repetição da resposta
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    // a linha abaixo muda o conteúdo do spam
    dt.querySelector('spam').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    //setAttribute vai exigir dois valores pra configuração
    //indexOf pesquisa o índice do item específic
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    //para cade resposta ele vai pegar o valor e vai atualizar o indice da resposta ex: valor 0, 1 ou 2...
    
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      //alert(estaCorreta) // true
  //alert(event.target.value)
  
//deleta o item se vc mudar de opinião.
  corretas.delete(item)
  if(estaCorreta) {
    corretas.add(item)
  }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
  //alert(corretas.size)
    }

    
    quizItem.querySelector('dl').appendChild(dt)
  }
// a linha abaixo remove o conteúdo da dt que está como resposta A.
quizItem.querySelector('dl dt').remove()

  // coloca a pergunta na tela
quiz.appendChild(quizItem)
  //alert(item.pergunta)
}
