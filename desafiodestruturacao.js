const filmes = [{
    tituloFilme: "Efeito Borboleta",
    generoFilme: ["Ação", "Suspense"],
    tempoDuracao: "2h",
    classificacaoIndicativa: "Não recomendado para menores de 14 anos",
    nota: 4.7,
    comentario: "Filme muito bom, nota 10!"
},
{
    tituloFilme: "A Fantástica Fábrica de chocolate",
    generoFilme: ["Infantil", "Aventura", "Musical"],
    tempoDuracao: "1h 55m",
    classificacaoIndicativa: "Livre para todos os públicos",
    nota: 4.2,
    comentario: "Incrivel para assitir com a familia!"
}
]

//const {tituloFilme, generoFilme , tempoDuracao}= filme;

filmes.forEach(({ tituloFilme, generoFilme, tempoDuracao }, i) => {

    console.log(`
Titulo do Filme ${i + 1}: ${tituloFilme.toUpperCase()}
Gênero : ${generoFilme}
Tempo de duração : ${tempoDuracao}
`);
});






