const faturamentoEstadual = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const valorTotalEstadual = Math.round(Object.values(faturamentoEstadual).reduce((acc, curr) => acc + curr, 0));

console.log(valorTotalEstadual)

const percentualDeRepresentacao = Object.entries(faturamentoEstadual).map(([estado, valor]) => {
    return {
        estado,
        percentual: ((valor / valorTotalEstadual) * 100).toFixed(2)
    };
});

console.log(percentualDeRepresentacao);

//              ============================================================================

// const faturamentoEstadual = [67836.43, 36678.66, 29229.88, 27165.48, 19849.5];

// const valorTotalEstadual = faturamentoEstadual.reduce((acc, curr) => acc + curr, 0);

// const percentualDeRepresentacao = [];
// for (let i = 0; i < faturamentoEstadual.length; i++) {
//     percentualDeRepresentacao[i] = ((faturamentoEstadual[i] / valorTotalEstadual) * 100).toFixed(2);
// }

// console.log(percentualDeRepresentacao);

// //              ============================================================================

// const faturamentoEstadualJSON = '{"SP": 67836.43, "RJ": 36678.66, "MG": 29229.88, "ES": 27165.48, "Outros": 19849.5}';

// const faturamentoEstadual = JSON.parse(faturamentoEstadualJSON);

// const valores = Object.values(faturamentoEstadual);
// const valorTotalEstadual = valores.reduce((acc, curr) => acc + curr, 0);

// const percentualDeRepresentacao = {};
// for (const estado in faturamentoEstadual) {
//     percentualDeRepresentacao[estado] = ((faturamentoEstadual[estado] / valorTotalEstadual) * 100).toFixed(2);
// }

// console.log(percentualDeRepresentacao);
