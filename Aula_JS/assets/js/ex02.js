/*Uso de variáveis em JS 
Não é necessário declarar o tipo , pois o JS tem tipagem dinamica reservada em "var"  */ 
var frase
frase="Aque temos uma String"
alert(frase)
var nome

nome=prompt("Digite o seu nome")
alert("Bem vindo "+ nome)

var idade
idade=prompt("Digite sua idade")
alert(idade +"anos")

/*Operações aritméticas com JS*/ 
var n1,n2,r 
n1=3
n2=5
r=n1+n2
alert("O resultado da soma entre:"+n1+"+"+n2+"="+r)

/*Operações com valores digitados pelo usuário , parseInt faz a conversão para inteiros ,se não usar isso para converter ele entende que é uma string */
n1=parseInt(prompt("digite um numero:"))
n2=parseInt(prompt("Digite outro numero:"))
r=n1+n2
alert("resultado da soma:"+n1+"+"+n2+"="+r)
/*Realize a divisão de dois numeros digitados pelo usuário e apresente o resultado  */
n1=parseFloat(prompt("digite um numero:"))
n2=parseFloat(prompt("Digite outro numero:"))
r=n1/n2
alert("resultado da divisão:"+n1+"/"+n2+"="+r)

