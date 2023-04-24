function fetchApiData() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    // .then((data) => console.log(data)) //temos a exibição do dado completo no console.
    .then((data) => {
      const list = document.querySelector("#fill_list"); //list recebe uma ul que foi criado no HTML

      data.map((item) => {
        // faz, praticamente um loop por todo array. Onde o parâmetro é cada objeto a ser repetido
        const li = document.createElement("li"); //criando elemento HTML no js

        li.setAttribute("id", item.id); // setando atributo do tipo ID para o li e o nome do ID
        li.innerHTML = item.title; //adiciona elemento li já com o valor setado, que é o title do item.
        list.appendChild(li); //atribuindo o li dentro da list, que é o ul
      });
    }); // data seria os dados da resposta que obtivemos na linha 3

  // response é a resposta que teve ao acessar a URL
  //fetch é uma função nativa do JS; recebe dois parâmetros: a url e o seu tipo
  //transformando a resposta em tipo json
}
