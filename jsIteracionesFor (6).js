function mostrar()
{
    var cont=0;
    var num=prompt("Numero","Ingresar numero");
    
    for(var i=1;i<=num;i++){
       
        if((i%2)==0){
            alert("Es par: "+i);
            cont++;
        }
    }
alert("Se encontraron"+cont+"numeros pares");



}//FIN DE LA FUNCIÓN