const numeros = [10 , 12 , 20];

const somatorio = numeros.reduce((total , n ) => {
    return total + n 
} , 0);

console.log(somatorio);

//exemplo em uma loja 

const vendedor = "Eduardo Costa";
const produtos = [
    {produto: "Camiseta" , preco: 129.90},
    {produto: "Tenis" , preco: 350.97},
    {produto: "Jaqueta de couro" , preco: 700.01}
];

let totProduto = produtos.reduce((vlInicial, op) =>{
    return vlInicial + (op.preco);
}, 0);

/*console.log(`O total de vendas foi de : R$${totProduto}`);*/

let comissao = produtos.reduce((vlInicial, op) =>{
    return vlInicial + (op.preco * 0.05);
}, 0);

console.log(`A comissao de vendas do ${vendedor }foi de : R$${comissao.toFixed(2)}`);
