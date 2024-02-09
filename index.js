//const cria uma variável nomeada perguntas e a araay[] armazena as variáveis em grupo e achave {} armazena os dados da variável como propriedade e valor ex. variável celular, propriedades cor, modelo, peso...
const perguntas = [
  {
    pergunta: "Qual é o prato típico brasileiro feito com feijão preto, carne de porco e acompanhamentos como arroz, farofa e couve?",
    respostas: [
      "Acarajé",
      "Feijoada",
      "Moqueca",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o doce brasileiro feito com uma mistura de leite condensado, manteiga e chocolate em pó?",
    respostas: [
      "Brigadeiro",
      "Bolo de rolo",
      "Beijinho",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o prato típico nordestino que leva carne de sol, queijo coalho, mandioca e manteiga de garrafa?",
    respostas: [
      "Pão de queijo",
      "Baião de dois",
      "Escondidinho",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do tradicional prato nordestino composto por uma mistura de farinha de mandioca com água, sal e temperos, geralmente servido com carne de sol, queijo coalho e manteiga de garrafa?",
    respostas: [
      "Tapioca",
      "Acarajé",
      "Pirão",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o doce típico do estado do Rio Grande do Sul, feito com ovos, açúcar e erva-mate?",
    respostas: [
      "Quindim",
      "Pudim",
      "Chimarrão",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do prato típico do estado da Bahia, feito com massa de feijão-fradinho e recheado com camarão, vatapá, caruru, pimenta e outros ingredientes?",
    respostas: [
      "Feijoada",
      "Vatapá",
      "Acarajé",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o prato típico do estado de Minas Gerais, feito com feijão tropeiro, linguiça, bacon, ovos, farinha de mandioca e temperos?",
    respostas: [
      "Feijão preto",
      "Feijoada",
      "Feijão tropeiro",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o doce típico do estado do Pará, feito com uma mistura de tucupi, jambu, camarão, alho, cebola, pimenta e outros ingredientes?",
    respostas: [
      "Pavê",
      "Pato no tucupi",
      "Tacacá",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o prato típico brasileiro composto por peixe, leite de coco, azeite de dendê, tomate, pimentão e outros ingredientes?",
    respostas: [
      "Feijoada",
      "Moqueca",
      "Bacalhoada",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da sobremesa típica do estado da Bahia, feita com massa de aipim, leite de coco, açúcar, ovos e outros ingredientes?",
    respostas: [
      "Cuscuz",
      "Canjica",
      "Pé de moleque",
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
