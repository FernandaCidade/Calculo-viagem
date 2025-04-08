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
}