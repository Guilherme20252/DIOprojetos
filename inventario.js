// 1. Lê o nome e a quantidade do item que o usuário quer verificar
const nome = gets();
const quantidade = parseInt(gets());

// 2. Define o inventário com os itens e suas quantidades
let inventario = [
    {nome: 'espada', quantidade: 1},
    {nome: 'escudo', quantidade: 1},
    {nome: 'poção de cura', quantidade: 6},
    {nome: 'poção de mana', quantidade: 4},
    {nome: 'pergaminho', quantidade: 3},
];

// 3. Procura o item no inventário pelo nome
let item = inventario.find(item => item.nome === nome);

// 4. Verifica se o item existe E se a quantidade é suficiente
if (item && item.quantidade >= quantidade) {
    console.log("Disponível");
} else {
    console.log("Indisponível");
}
