const camisaLacoste = {
    descricao : "Camisa Polo",
    preco: 589.97,
    tamanho: "M",
    cor: "Amarela",
    presente: true
};

let {descricao, preco} = camisaLacoste;
const {presente} = camisaLacoste;


console.log("PRODUTO");

console.log();

console.log(`
    Descrição: ${descricao}
    Preço:${preco}
    Presente: ${presente ? "Sim" : "Não"}
`);

/*console.log(`Descrição: ${descricao}`);
console.log(`Preço: ${preco}`);*/

const eventos = {
    dataEvento : new Date (),
    descricaoEvento : "Evento de Java Script",
    tituloEvento : "Programação web",
    presencasEvento : true,
    comentario : "evento top com o Edu"
}

//const copiaEvento ={...eventos}

const {dataEvento , descricaoEvento , tituloEvento , presencasEvento, comentario}= eventos

console.log(`
    ${dataEvento}
    ${descricaoEvento}
    ${tituloEvento}
    ${presencasEvento}
    ${comentario}
`);

