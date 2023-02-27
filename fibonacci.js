//1 = 0 + 1 //2º chamada 2 = 1 + 1

function fibonacci(size) {
  let n1 = 0;
  let n2 = 1;
  let result = 0;

  let fibonacci = ""
  fibonacci += n1 + " " + n2

  for (let i = 0; i < size; i++) {
    result = n1 + n2;
    n1 = n2;
    n2 = result;
    fibonacci += " " + result
  }

  console.log(fibonacci);
}

fibonacci(8) //recebe como parametro tamanho da sequencia que deseja 
