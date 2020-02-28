function mostrar()
{
    var cont=0;
    var num= prompt("Numero.", "Ingresar Numero.");

        for(var i=0;i<=num;i++){

            if((num%i)==0){
            alert("Es divisible por"+i);
            cont++;
            }
        }
        alert("Se encontraron"+cont+"numeros divisores");

            
            
            
            
            
}//FIN DE LA FUNCIÓN