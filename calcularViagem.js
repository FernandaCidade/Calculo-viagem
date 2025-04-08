function calcularViagem() {
    // Solicitar os dados ao usuário
    var nome = prompt("Insira seu nome:");
    var quantidadePassageiros = prompt("Insira a quantidade de passageiros:");
    var valorViagem = prompt("Insira o valor da viagem:");

    // Garantir que os valores são numéricos
    quantidadePassageiros = parseInt(quantidadePassageiros);
    valorViagem = parseFloat(valorViagem);

    // Calcular o valor total
    var resultado = quantidadePassageiros * valorViagem;

    // Exibir o resultado
    // Aqui alocaremos o resultado dentro da tabela

    var tabela = document.getElementById("resultado").getElementsByTagName("tbody")[0];

    // Aqui será criado uma nova linha dentro da tabela.

    var novaLinha = tabela.insertRow();
    
    // Criar as células e adicionar os valores
    var celulaNome = novaLinha.insertCell(0);
    var celulaPassageiros = novaLinha.insertCell(1);
    var celulaValorViagem = novaLinha.insertCell(2);
    var celulaTotal = novaLinha.insertCell(3);

    // Preencher as células com as informações
    celulaNome.textContent = nome;
    celulaPassageiros.textContent = quantidadePassageiros;
    celulaValorViagem.textContent = valorViagem.toFixed(2);
    celulaTotal.textContent = resultado.toFixed(2);
}