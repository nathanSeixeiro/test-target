const data = require("./dados"); // importando dados

function main() {
  const dailyValues = getDailyValues(data);
  const minValue = getMinValue(dailyValues);
  const maxValue = getMaxValue(dailyValues);
  const daysAboveAverage = getDaysAboveAverage(dailyValues);

  console.log("Menor valor: ", minValue);
  console.log("Maior valor: ", maxValue);
  console.log("Dias acima da média: ", daysAboveAverage);
}

function getDailyValues(data) {
  return data.filter((item) => item.valor !== 0).map((item) => item.valor);
}

function getMinValue(values) {
  // return Math.min(...values);
  let minValue = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] < minValue) {
      minValue = values[i];
    }
  }
  return minValue;
}

function getMaxValue(values) {
  return Math.max(...values);
}

function getDaysAboveAverage(values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  const average = sum / values.length;
  let count = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > average) {
      count++;
    }
  }
  return count;
}

main();
