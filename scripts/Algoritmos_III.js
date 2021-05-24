// PARTE 2

// 1) Analiza los valores de un array y obtén el promedio (average) de esos valores.

function printAverage(x){
   sum = 0;
   // your code here
	for(var i=0;i<x.length;i++){
		sum+=x[i];
	}
	return sum/x.length;
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
  
y = printAverage([2,5,8]);
console.log(y); // should log 5

// ----------------------------------------------------------
// 2) Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)

function returnOddArray(){
   // your code here
   var arr=[];
	for(var i=1;i<=255;i+=2){
		arr.push(i);
	}
	return arr;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]

// ----------------------------------------------------------
// 3) Cuadra cada valor con un array dado, obteniendo el mismo array con valores cambiados.

function squareValue(x){
   // your code here
	for(var i=0;i<x.length;i++){
		x[i]*=x[i];
	}
   return x;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]

y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]
