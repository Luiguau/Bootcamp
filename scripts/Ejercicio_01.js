// 1. Buscar un numero en un arreglo, Hay que crear una funcion que recibe un arreglo y el numero a buscar en el arreglo.
// La funcion debe buscar en el arreglo el numero indicando la posicion del numero en el arreglo. Imprimir los resultados en pantalla.
function searchNumArr(arr, num){
	//forma rapida
	// if(arr.indexOf(num)!=-1){
	// 	return (num + " se encuentra en la posicion: " + (arr.indexOf(num)+1));
	// }else{
	// 	return ("el elemento " + num + " no se encuenta en el arreglo dado");
	// }
	//forma casera para más de una coincidencia
	let tempArr=[];
	for(let i=0;i<arr.length;i++){
		if(arr[i]==num){
			tempArr.push(i+1);
		}
	}
	if(tempArr.length!=0){
		if(tempArr.length==1){
			return (num + " se encuentra en la posicion: " + tempArr[0]);
		}else{
			return (num + " se encuentra en las posiciones: " + tempArr);
		}
	}else{
		return ("el elemento " + num + " no se encuenta en el arreglo dado");
	}
}

console.log(searchNumArr([1,3,5,7,9,15,55,102,99],2));
console.log(searchNumArr([1,3,55,7,9,15,55,102],55));

// 2. Construya una funcion que permita ordenar una lista de numeros de manera ascendente. Imprima el arreglo ordenado.
function sortArr(arr){
	// forma rapida
	// arr.sort(function(a, b){return a-b});
	// return arr;

	// otra forma
	do {
		var ordened=0;
		for(let i=0;i<arr.length;i++){
			if(arr[i]>arr[i+1]){
				let temp=arr[i+1];
				arr[i+1]=arr[i];
				arr[i]=temp;
				ordened++;
			}
		}
	}while (ordened!=0); 
	return arr;
}

console.log(sortArr([1,3,55,7,9,15,55,102]));
console.log(sortArr([389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131]));
console.log(sortArr([3,1,9,5,6,7,4,2,8,10]));

// function Burbuja() { 
// 	let lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131]; 
// 	let n, i, k, aux; 
// 	n = lista.length; 
// 	console.log(lista); 
// 	// Mostramos, por consola, la lista desordenada 
// 	// Algoritmo de burbuja 
// 	for (k = 1; k < n; k++) { 
// 		for (i = 0; i < (n - k); i++) { 
// 			if (lista[i] > lista[i + 1]) { 
// 				aux = lista[i]; 
// 				lista[i] = lista[i + 1]; 
// 				lista[i + 1] = aux; 
// 			} 
// 		} 
// 	} 
// 	console.log(lista); 
// 	// Mostramos, por consola, la lista ya ordenada 
// }

// Burbuja();