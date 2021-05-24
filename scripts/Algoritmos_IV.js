    // 1.- Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 

		function mayoresY(arr, y){
      var result="Los numeros mayores que " + y + " en el arreglo ["+ arr + "] son: ";
      var arrResult=[];
      for(var i=0; i<arr.length; i++){
        if(arr[i]>y){
          arrResult.push(arr[i]);
        }
      }
      if (arrResult.length > 0){
        for(var i=0; i<arrResult.length;i++){
          result= result + arrResult[i] + " ";
        }
      }
      console.log(result);
    }  

    // 2.- Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 
    function infoArray(arr){
      var sum=0;
      var min=arr[0];
      var max=arr[0];
      for(var i=0; i<arr.length; i++){
        if(max<arr[i]){
          max=arr[i]
        }
        if(min>arr[i]){
          min=arr[i]
        }
        sum+=arr[i];
      }
      console.log("En el arreglo [" + arr +"]");
      console.log("su valor maximo es: " +max);
      console.log("su valor minimo es: " +min);
      console.log("su promedio es: " +sum/arr.length);
    }  

    // 3.- Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
    function remplNeg(arr){
      for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
          arr[i]="Dojo";
        }
      }
      return arr;
    }

    // 4.- Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].

    function removeArr(arr, startInd, endInd){
      var arrTemp=[];
      for(var i=0;i<arr.length;i++){
        if(i<startInd || i>endInd){
          arrTemp.push(arr[i]);
        }
      }
      return arrTemp;
    }