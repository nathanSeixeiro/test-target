//1 = 0 + 1 //2º chamada 2 = 1 + 1

function fibonacci(size, num) {
  let n1 = 0;
  let n2 = 1;
  let result = 0;

  let fibonacci = ""
  fibonacci += n1 + " " + n2

  let found = false;

  for (let i = 0; i < size; i++) {
    result = n1 + n2;
    n1 = n2;
    n2 = result;
    fibonacci += " " + result;

    if (result === num) {
      found = true;
    }
  }

  console.log(fibonacci);

  if (found) {
    console.log(num + " pertence à sequência de Fibonacci");
  } else {
    console.log(num + " não pertence à sequência de Fibonacci");
  }
}

fibonacci(8,13) //recebe como parametro tamanho da sequencia que deseja e o numero a se verificar 
