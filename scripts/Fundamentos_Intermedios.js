// Parte 1

//  1. Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).
function sigma(num){
	let sum=0;
	for(i=num;i>0;i--){
		sum+=i;
	}
	return sum;
}

console.log(sigma(-3));

//  2. Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
function factorial(num){
	let fact=1;
	for(i=num;i>0;i--){
		fact*=i;
	}
	return fact;
}

console.log(factorial(3));

//  3. Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. 
function fibonacci(index){
	let results=[0,1];
	if(index>1){
		for(let i=2;i<index;i++){
			results.push(results[0]+results[1]);
			results.splice(0,1);
		}
		return results[0]+results[1]
	}else{
		return results[index];
	}
}

console.log(fibonacci(7));
console.log(fibonacci(10));
console.log(fibonacci(20));
console.log(fibonacci(1));
console.log(fibonacci(0));
console.log(fibonacci(100));
console.log(fibonacci(103));
console.log(fibonacci(1000));
console.log(fibonacci(1476));
console.log(fibonacci(1477));


//  4. Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.  
function secondlastArr(arr){
	if(arr.length>1){
		return arr[arr.length-2];
	}else{
		return null;
	}
}

console.log(secondlastArr([42,true,4,"Liam", 7]));
console.log(secondlastArr([42]));

//  5. Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null. 
function nlastArr(arr, ind){
	if(arr.length>ind){
		return arr[ind];
	}else{
		return null;
	}
}

console.log(nlastArr([5,2,3,6,4,9,7],3));
console.log(nlastArr([5,24,9,7],4));

//  6. Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.
function secondBigger(arr){
	if(arr.length>1){
		let temp=[arr[0]];
		for(let i=0;i<arr.length;i++){
			if(temp[0]<arr[i]){				
				temp[1]=temp[0];
				temp[0]=arr[i];
			}else if(temp[1]<arr[i] && arr[i]!=temp[0]){
					temp[1]=arr[i];
			}
		}
		return temp[1];
	}else{
		return null;
	}
}

console.log(secondBigger([6,2,42,1,4,3.14,7]));
console.log(secondBigger([5,24,98,7,8]));
console.log(secondBigger([5]));

//  7. Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par, y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function pairArr(arr){
	for(let i=0;i<arr.length;i+=2){
		arr.splice(i,0,arr[i]);
	}
	return arr;
}

console.log(pairArr([4, "Ulysses", 42, false]));

// Parte 2

//  1. Crea una función Fib(n) que devuelve el enésimo número Fibonacci. Usa recursión para esto.
function fib(n){
	if(n<0){
		return "favor ingresar un numero positivo";
	}else if(n<2) {
		return n;
	}else{
		return fib(n-2)+fib(n-1);
	}
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(5));
console.log(fib(10));
