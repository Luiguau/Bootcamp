// Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].

function negTo0(arr){
	for(i in arr){
		if(arr[i]<0){
			arr[i]=0;
		}
	}
	return arr;
}

console.log(negTo0([1,2,-1,-3]));

// Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].

function moveArr(arr){
	arr.splice(0,1);
	arr.push(0);
	return arr;
}

console.log(moveArr([1,2,3]));

// Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].

function arrReverse(arr){
	let temp=[];
	for(let i=arr.length-1; i >=0; i--){
		temp.push(arr[i]);
	}
	return temp;
}

console.log(arrReverse([1,2,3,4]));

// Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function arrRepeat(arr){
	for(i=0;i<arr.length;i+=2){
		arr.splice(i,0,arr[i]);
	}
	return arr;
}

console.log(arrRepeat([4,"Ulysses", 42, false]));