const herois = [
    { nome: "luke", nivel: 30 },
    { nome: "jasper", nivel: 25 },
    { nome: "midgar", nivel: 10 },
    { nome: "bilbo", nivel: 50 }
];

const nome = gets();
const nivel = parseInt(gets());

// Busca o guerreiro no array pelo nome
let guerreiro = herois.find(h => h.nome === nome);

// Verifica o nível e exibe a mensagem correta
if (guerreiro && guerreiro.nivel >= 40) {
    console.log("Parabéns, valente " + nome + "! Sua coragem e habilidade são notáveis!");
} else if (guerreiro && guerreiro.nivel >= 30 && guerreiro.nivel < 40) {
    console.log("Quase lá, " + nome + "! Continue treinando!");
} else {
    console.log("Ainda é cedo, jovem " + nome + ". Treine mais!");
}
