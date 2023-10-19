/*const api = new Promise((resolve, reject) =>{
    console.log("Acessando o banco e retornando os dados");

    //const sucesso = true;

    const sucesso = false;

    //return resolve();

    if (sucesso) 
        return resolve ("Deu certo, toma aqui seus dados");
    else return reject ("Deu ruim!")
});

const retorno = api;
console.log(api);*/

console.clear();

const api = new Promise((resolve, reject) => {
  let condition = true; //simula uma operação no back end

  const soma = (x, y) => s + y;

  //aqui simula uma chamada demorada ao servidor
  setTimeout(() => {
    console.log("promise sendo executada");
    if (condition) {
      resolve("A promise foi resolvida com sucesso.");
    } else {
      reject("A promise foi rejeitada.");
    }
  }, 3000);
});

console.log();
console.log();
console.log(api); //chamada na api
console.log();
console.log();

api
  .then((retorno) => {
    console.log(retorno);
  })
  .catch((erro) => {
    console.error(erro);
  });
