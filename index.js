//const cria uma variável nomeada perguntas e a araay[] armazena as variáveis em grupo e achave {} armazena os dados da variável como propriedade e valor ex. variável celular, propriedades cor, modelo, peso...
const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de servidor.",
        "Uma linguagem de marcação para desenvolvimento web.",
        "Uma linguagem de programação de alto nível para desenvolvimento web.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador utilizado para atribuição de valores em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado.",
        "Um laço de repetição.",
        "Um bloco de código reutilizável que executa uma tarefa específica.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "console.log()",
        "print.console()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um contêiner para armazenar valores de dados.",
        "Um tipo de dado primitivo.",
        "Um tipo de estrutura de controle.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      respostas: [
        "Selecionar todos os elementos do DOM.",
        "Selecionar o primeiro elemento que corresponde a um seletor CSS especificado.",
        "Selecionar o último elemento que corresponde a um seletor CSS especificado.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar coleções ordenadas de valores.",
        "Uma estrutura de controle condicional.",
        "Um método para iterar sobre elementos do DOM.",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '==' faz em JavaScript?",
      respostas: [
        "Compara dois valores quanto ao tipo e ao valor.",
        "Compara dois valores quanto ao tipo, mas não quanto ao valor.",
        "Compara dois valores apenas quanto ao valor, ignorando o tipo.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->",
        "/* Este é um comentário de uma linha */",
      ],
      correta: 0
    }
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