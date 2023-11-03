//autor: Julio Cesar Bueno
//e-mil: juliocesar.ovidiobueno@outlook.com
// 02/11/2023 23:47

// Optei por trabalhar com variáveis e constantes vetorizando pelo motivo de que o código fica mais legível e organizado.
//Definido como variável, devido poder ser alterado tanto o nome do personagem herói quanto também o seu valor de XP.
let heroi = ["Ragnarok",7001]

//Defini como constante, pois dificilmente esses valores mudariam.
const nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina Diamante", "Ascendente", "Imortal", "Radiante"]

const mensageria = ["seu XP atual é ", ", e alcançou o nível: "]

//Optei por criar uma constante para concatenar e ter um certo padrão, sendo assim a manutenção no code fica mais fácil.
const prompt = heroi[0]+" "+mensageria[0]+"["+heroi[1]+"]"+mensageria[1]

// Até tentei aplicar switch, mas para esse desafio, acredito ser mais aplicável a decisão IF.
// Se XP do heroi for 1000, nada acontecerá, isso porque resolvi seguir aos pé da letra o que foi proposto no desafio.
if (heroi[1] < 1000) {
    console.log(prompt+" "+nivel[0])

} else if (heroi[1] >= 1001 && heroi[1] <= 2000) {
    console.log(prompt+" "+nivel[1])

} else if (heroi[1] >= 2001 && heroi[1] <= 5000) {
    console.log(prompt+" "+nivel[2])

} else if (heroi[1] >= 6001 && heroi[1] <= 7000) {
    console.log(prompt+" "+nivel[3])

} else if (heroi[1] >= 7001 && heroi[1] <= 8000) {
    console.log(prompt+" "+nivel[4])

} else if (heroi[1] >= 8001 && heroi[1] <= 9000) {
    console.log(prompt+" "+nivel[5])

} else if(heroi[1] >= 9001 && heroi[1] <= 10000) {
    console.log(prompt+" "+nivel[6])

}