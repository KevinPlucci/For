function mostrar()
{
    var cont=0;
    var num=prompt("Ingrese un numero");
    
    num=parseInt(num);
    
    for(var i=0;i<12;i++){
        
        if((num%i)==0){
            cont++;
        }
    }
    if(cont<3){
        alert("El numeroe es primo");
    }else{
        alert("El numero no es primo")
    }









}//FIN DE LA FUNCIÓN