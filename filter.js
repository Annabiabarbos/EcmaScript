//funciona como um filtro 

const numero = [1, 2, 200 , 10, 7, 12 , 15 , 8];

console.log(numero);

const nMenor10 = numero.filter((n) => {
    return n < 10;
})

const doisDuzentos = numero.filter((n)=>{
    return n === 2 || n === '200';
})

console.log(nMenor10);

console.log(doisDuzentos);

//exemplo em comentarios
/*const comentarios = [
    {comentario: "bla , bla, bla" , exibe : true},
    {comentario: "bla , bla, bla" , exibe : false},
    {comentario: "excelente evento!" , exibe : true},
]

const comentariosOK = comentarios.filter((c) => {
    return c.exibe === true;
});

console.log(comentariosOK);*/

