//Ejercicio 1 - las pruebas están escritas. Completa la función para pasar la prueba

//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n){
	if(typeof(n)=="number"){
		let sum=0;
		if(n>0){
			for(let i=1;i<=n;i++){
				sum+=i;
			}
		}else
			for(let i=n;i<=1;i++){
				sum+=i;
			}
		return sum;
	}else{
		return "ingrese un numero";
	}
}

//devuelve la suma del primer y último número en el array
function sumFirstLast(arr){
	if(typeof(arr)=="object"){
		if(arr.length>0){
			return arr[0]+arr[arr.length-1];
		}else{
			return "arreglo dado no es valido";
		}
	}else{
		return"debe ingresar un arreglo";
	}
}

//Ejercicio 2 - Es tu turno de escribir primero el test y luego la función

//crea una prueba o función que devuelva la suma del número más grande y el más pequeño del array.
//Por ejemplo, sumMaxMin([1,3,10]) debería devolver 10 + 1 = 11, y sumMaxMin([-2,-5,-10]) debería devolver -2 + -10 = -12.

//funcion del ejercicio 2
function sumMaxMin(arr){
	if(typeof(arr)=="object"){
		if(arr.length>0){
			let min=arr[0];
			let max=arr[0];
			for(let i=1;i<arr.length;i++){
				if(max<arr[i]){
					max=arr[i];
				}
				if(min>arr[i]){
					min=arr[i];
				}
			}
			return max+min;	
		}else{
			return "arreglo dado no valido";
		}		
	}else{
		return"debe ingresar un arreglo";
	}
}

//prueba del Ejercicio 2
describe("sumMaxMin",function(){
    it("should return 11 when we pass [1,3,10] as an argument", function() { 
        expect(sumMaxMin([1,3,10])).toEqual(11); 
    }); 
    it("should return -12 when we pass [-2.-5-10] as an argument", function() { 
        expect(sumMaxMin([-2,-5,-10])).toEqual(-12); 
    }); 
// Pruebas extras que agregue
	it("should return 85 when we pass [2,0,85,5] as an argument", function() { 
        expect(sumMaxMin([2,0,85,5])).toEqual(85); 
    }); 
    it("should return 40 when we pass [21,3,-10,50,20,-5] as an argument", function() { 
        expect(sumMaxMin([21,3,-10,50,20,-5])).toEqual(40); 
    }); 
    it("should return 4 when we pass [2] as an argument", function() { 
        expect(sumMaxMin([2])).toEqual(4); 
    }); 
    it("should return 'arreglo dado no valido' when we pass [] as an argument", function() { 
        expect(sumMaxMin([])).toEqual("arreglo dado no valido"); 
    }); 
    it("should return 'debe ingresar un arreglo' when we pass 'casa' as an argument", function() { 
        expect(sumMaxMin("casa")).toEqual("debe ingresar un arreglo"); 
    }); 
    it("should return 'debe ingresar un arreglo' when we pass 2 as an argument", function() { 
        expect(sumMaxMin(2)).toEqual("debe ingresar un arreglo"); 
    }); 
	
});

//pruebas del Ejercicio 1
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
// Pruebas extras que agregue
    it("should return 32640 when we pass 255 as an argument", function() { 
        expect(Sum1toN(255)).toEqual(32640); 
    }); 
    it("should return -2627 when we pass -72 as an argument", function() { 
        expect(Sum1toN(-72)).toEqual(-2627); 
    }); 
    it("should return 1 when we pass 0 as an argument", function() { 
        expect(Sum1toN(0)).toEqual(1); 
    }); 
    it("should return 'ingrese un numero' when we pass 'casa' as an argument", function() { 
        expect(Sum1toN("casa")).toEqual("ingrese un numero"); 
    }); 
    it("should return 'ingrese un numero' when we pass true as an argument", function() { 
        expect(Sum1toN(true)).toEqual("ingrese un numero"); 
    }); 
    it("should return 'ingrese un numero' when we pass true as an argument", function() { 
        expect(Sum1toN([true,"casa",2])).toEqual("ingrese un numero"); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
// Pruebas extras que agregue
	it("should return 2 when we pass [6,0,2,-4] as an argument", function() { 
        expect(sumFirstLast([6,0,5,8,-20,2,-4])).toEqual(2); 
    }); 
    it("should return -12 when we pass [-6] as an argument", function() { 
        expect(sumFirstLast([-6])).toEqual(-12); 
    }); 
    it("should return 'arreglo dado no es valido' when we pass [] as an argument", function() { 
        expect(sumFirstLast([])).toEqual("arreglo dado no es valido"); 
    }); 
    it("should return 'aa' when we pass ['a'] as an argument", function() { 
        expect(sumFirstLast(["a"])).toEqual("aa"); 
    }); 
    it("should return 'a4' when we pass ['a', 3,2,'perro',4] as an argument", function() { 
        expect(sumFirstLast(["a", 3,2,"perro",4])).toEqual("a4"); 
    }); 
    it("should return 'catdog' when we pass ['cat', 3,2,'dog'] as an argument", function() { 
        expect(sumFirstLast(["cat", 3,2,"dog"])).toEqual("catdog"); 
    }); 
	it("should return 'debe ingresar un arreglo' when we pass 'casa' as an argument", function() { 
        expect(sumMaxMin("casa")).toEqual("debe ingresar un arreglo"); 
    }); 
    it("should return 'debe ingresar un arreglo' when we pass 2 as an argument", function() { 
        expect(sumMaxMin(2)).toEqual("debe ingresar un arreglo"); 
    }); 
});