const nome = ["Anna Beatriz" , "Carlos" , "Eduardo" , "Matheus" ,"Wender"]
const sobrenome = ["Barbosa" , "Roque" , "Mendes" , "Macedo" , "Castro"]
//nome.reverse() //- inverte os nomes
//sobrenome.reverse() // - inverte os sobrenomes


const nomesCompletos = nome.map((nome, indice) => {
    return `${nome} ${sobrenome[indice]}`;
})

nomesCompletos.forEach((nc) => {
    console.log(nc);
});



