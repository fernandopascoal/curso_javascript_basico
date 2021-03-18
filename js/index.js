 //------------------TRABALHANDO COM ARRAYS - Aula 2-------------------//

/* var nome = "Fernando Veiga"
var idade = 28

var frase = "Japão é o melhor time do mundo"


console.log ("Bem vindo " + nome)
console.log ("Sua idade é " + idade + " anos")

console.log(frase.toUpperCase())

var lista = ["maça", "laranja", "banana"]

lista.push("uva") //insere um item no array

console.log(lista)

lista.pop() //exclui o ultimo item do array

console.log (lista.length) //mostra o tamanho da lista

console.log (lista.reverse()) //mostra a array ao contrario

console.log (lista.toString()) //mostra o array como uma string, sem os colxetes

console.log (lista.join(" * ")) // transforma em string e define um separador*/

//----------------------------------FIM--------------------------------------// 


//---------------------TRABALHANDO COM DICIONARIO - Aula 2--------------------------//

/*let fruta = {nome: "morango", cor: "vermelho", preco: "3,50"}

console.log(fruta)

let frutas = [{nome: "morango", cor: "vermelho"}, {nome: "banana", cor: "amarela"}, {nome: "jabuticaba", cor: "preta"}]

console.log(frutas)

alert(frutas[1].nome)*/

//-------------------------------FIM--------------------------------------------//

//-------------------CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE--------------------//

//----Condicionais---//

/*
var idade = prompt("Qual sua idade ?")

if (idade >= 18) {
    alert("Maior de idade")
} else {
    alert ("Menor de idade")
}
*/

//-----Laços de Repetição------//

/* --- while
var count = 0

while (count <= 5) {
    console.log(count);
    count ++;
}
*/

/*----for-----
var count;

for (count=0; count <= 5; count++){
    console.log(count)
}
*/

//----- Date-----//
/*
var d = new Date()
alert(d)
alert(d.getDay())//mostra o dia da semana
alert(d.getDate())//mostra o dia
alert(d.getHours())//mostra as horas
alert(d.getMinutes())// mostra os minutos
alert(d.getMonth()+1)//mostra o mes. O mes sempre começa no 0 por isso precisa colocar o +1 pra mostrar o mes certo
*/

//----------------------------FIM------------------------------//

//----------------------------AULA 4 - MANIPULANDO ELEMENTOS------------------------------//

/* 
function soma (n1, n2) {
    return n1 + n2;
}

function validaIdade (idade){
    var validar;
    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade))

//alert(soma (20, 10));
*/

/*
function botao(){
    document.getElementById("click").innerHTML = "<b>Isso é um teste<b>" //escreve o texto no elemento que contem o mesmo id
}

function redirect(){
    window.open("https://www.google.com.br/") //abre o link em outra aba
    window.location.href = "https://www.google.com.br/" //abre o link na mesma pagina
}
*/

/*
function trocar() {
    document.getElementById("troca").innerHTML = "<b>Uiiiiii, você passou o mouse aqui<b>"//muda o texto quando passa o mouse
}

/*function load() {
    alert("está pagina esta pronta")//da um alert quando carrega a pagina
}*/
/*
function change(elemento) {
    console.log(elemento.value)//recebe um valor selecionado no select

}
*/

//---------------------FIM DO MÓDULO BÁSICO-----------------------//









