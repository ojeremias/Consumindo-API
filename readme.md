# Uso do fetch - código lido

1. Na linha dois, o fetch é um método que está recebendo como parâmetro a URL. Esta que contem dados; Pense que o fetch está retornando uma promise;
2. Logo após, é utilizao o método .then(), que será executado a promise ser retornada. Que o mesmo tem como parâmetro o response, que é a resposta que iremos ter após o retorno da promise. E pegando o dado, converteremos-o em .json;
3. Após isso também temos outro método semelhante, este que tem como parâmetro data, que é justamente o dado já convertido em json
   > Entenda por json como uma estrutura de se organizar dados. Praticamente é como uma organização de um objeto, onde contêm propriedades e valores
4. Feito isto, temos toda a lista já no console. Faça o teste.
5. Agora vamos fazer com que o mesmo venha ser exibido no próprio site
6. tendo os dados contidos no data, vamos mapea-lo. Maper uma lista com objetos é meio que ir um por um para fazer algo. Mas lembre-se que, vamos gerar uma nova lista de objetos, a original não será modificada!
7. Antes, criamos uma const list, que recebe um elemento UL do HTML, assim, list é <ul></ul>
8. Depois esatmos criando uma li, que irá receber um elemento a ser criado, dentro do js, que a li, no HTML5;
9. Finalizando temos: setando o id do li criado no js, e o seu valor.
10. Ttemos, por fim, informando que o list receberá um filho, que é o li. Entenda que o li estará contido no ul.
