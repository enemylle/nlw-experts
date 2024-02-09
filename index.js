const perguntas = [
  {
    pergunta: "Qual é o prato típico brasileiro feito com feijão preto, carne de porco e acompanhado de farofa, couve e laranja?",
    respostas: [
      "Feijoada",
      "Moqueca",
      "Vatapá",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o quitute brasileiro feito de massa frita e recheado com carne moída, queijo, frango ou outros ingredientes?",
    respostas: [
      "Pastel",
      "Coxinha",
      "Empada",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a bebida típica do Brasil, feita de uma mistura de suco de frutas, geralmente limão, açúcar e gelo?",
    respostas: [
      "Água de coco",
      "Caipirinha",
      "Guaraná",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a comida típica do nordeste brasileiro, feita de uma massa de farinha de mandioca cozida com água e sal?",
    respostas: [
      "Acarajé",
      "Tapioca",
      "Pamonha",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o prato brasileiro à base de peixe e frutos do mar, cozido em um molho com leite de coco, azeite de dendê, pimentões e outros temperos?",
    respostas: [
      "Feijoada",
      "Moqueca",
      "Vatapá",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o doce típico brasileiro feito de uma mistura de tapioca granulada, leite de coco e açúcar?",
    respostas: [
      "Brigadeiro",
      "Beijinho",
      "Bolo de rolo",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o prato típico brasileiro feito de milho verde ralado, misturado com leite de coco e açúcar, e cozido em folhas de bananeira?",
    respostas: [
      "Coxinha",
      "Canjica",
      "Cuscuz",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o prato típico brasileiro composto de arroz, feijão, carne seca, queijo coalho, vinagrete e mandioca frita?",
    respostas: [
      "Churrasco",
      "Acarajé",
      "Baião de dois",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o quitute brasileiro feito de uma massa de mandioca cozida recheada com carne-seca e catupiry, e depois frita?",
    respostas: [
      "Pastel",
      "Coxinha",
      "Escondidinho",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a fruta brasileira, de cor roxa, que é a principal ingrediente de um prato típico do norte do Brasil, preparado com peixe, camarão seco, tucupi e jambu?",
    respostas: [
      "Açaí",
      "Cupuaçu",
      "Bacaba",
    ],
    correta: 0
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
