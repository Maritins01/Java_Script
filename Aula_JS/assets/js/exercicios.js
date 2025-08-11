/*exercicio 1*/ 
var n1,n2,r 
n1=parseInt(prompt("SUBTRAÇÃO: digite um numero:"))
n2=parseInt(prompt("Digite outro numero:"))
r=n1-n2
alert("resultado da subtração:"+n1+"-"+n2+"="+r)

/*exercicio 2*/
var n1,n2,n3,r 
n1=parseInt(prompt("MULTIPLICAÇÃO: digite o primeiro numero:"))
n2=parseInt(prompt("Digite o segundo numero:"))
n3=parseInt(prompt("Digite o terceiro numero:"))
r=n1*n2*n3
alert("resultado da multiplicação:"+n1+"x"+n2+"x"+n3+"="+r)

/*exercicio 3*/
var n1,r 
n1=parseInt(prompt("N° AO CUBO: digite um numero:"))
r=n1*n1*n1
alert("resultado:"+n1+"^3="+r)

/*exercicio 4 */
var n1,ant,sus
n1=parseInt(prompt("ANTECESSOR E SUCESSOR digite um numero:"))
ant=n1-1
sus=n1+1
alert("O antecessor é: "+ant+"  E o sucessor é:"+sus)

/*exercicio 5 area do triangulo*/
var base, altura, area;
base = parseInt(prompt("TRIANGULO: Digite a base do triângulo:"));
altura = parseInt(prompt("Digite a altura do triângulo:"));
area = (base * altura) / 2;
alert("A área do triângulo é: " + area);

/* exercicio 6 */
var km, litros, media;
km = parseInt(prompt("Digite a quantidade de KM percorridos:"));
litros = parseInt(prompt("Digite a quantidade de litros gastos:"));
media = km / litros;
alert("A média de Km por litro (Km/l) é: " + media);

/*exercicio 7 */
var valorTotal, parcelas, valorParcela;
valorTotal = parseFloat(prompt("Digite o valor da compra:"));
parcelas = parseInt(prompt("Digite a quantidade de parcelas:"));
valorParcela = valorTotal / parcelas;
alert("O valor de cada parcela é: R$ " + valorParcela);

/*exercicio 8*/
var n1, n2, n3, n4, media;
n1 = parseFloat(prompt("Digite a primeira nota:"));
n2 = parseFloat(prompt("Digite a segunda nota:"));
n3 = parseFloat(prompt("Digite a terceira nota:"));
n4 = parseFloat(prompt("Digite a quarta nota:"));
media = (n1 + n2 + n3 + n4) / 4;
alert("A média anual do aluno é: " + media);

/*exercicio 9*/
var valor, valorComAcrescimo, valorComDesconto;
valor = parseFloat(prompt("Digite o valor da compra:"));
valorComAcrescimo = valor + (valor * 0.15);
valorComDesconto = valor - (valor * 0.15);
alert("Valor com 15% de acréscimo: R$ " + valorComAcrescimo +"\nValor com 15% de desconto: R$ " +valorComDesconto);








