const dados = require("./dados");

function main() {
  const diasValorados = diasComFaturamento(dados);
  const menorValor = menorFaturamento(diasValorados);
  const maiorValor = maiorFaturamento(diasValorados);
  const acimaMedia = AcimaDaMedia(diasValorados);

  console.log("Valor do dia com menor faturamento: ", menorValor);
  console.log("Valor do dia com maior faturamento: ", maiorValor);
  console.log("Valor de dias com faturamento acima da média: ", acimaMedia);
}

//verifica quais não tiveram faturamento e retorna um novo array
function diasComFaturamento(dados) {
  const diasComFaturamento = [];
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].valor !== 0.0) {
      diasComFaturamento.push(dados[i].valor);
    }
  }
  return diasComFaturamento;
}

//dia com o menor faturamento
function menorFaturamento(dados) {
  let valorMin = dados[0];
  for (let i = 1; i < dados.length; i++) {
    if (dados[i] < valorMin) {
      valorMin = dados[i];
    }
  }
  return valorMin;
}

//dia com o maior faturamento
function maiorFaturamento(dados) {
  let valorMin = dados[0];
  for (let i = 1; i < dados.length; i++) {
    if (dados[i] > valorMin) {
      valorMin = dados[i];
    }
  }
  return valorMin;
}

//mostra dias com valor acima da media
function AcimaDaMedia(dados) {
  const media = calculoMedia(dados);
  let acimaDaMedia = 0;
  for (let i = 0; i < dados.length; i++) {
    if (dados[i] > media) {
      acimaDaMedia++;
    }
  }
  return acimaDaMedia;
}

//calcula a media de valor
function calculoMedia(valor) {
  let soma = 0;
  let qtd = 0;

  for (let i = 0; i < valor.length; i++) {
    soma += valor[i];
    qtd++;
  }

  return soma / qtd;
}

main();
