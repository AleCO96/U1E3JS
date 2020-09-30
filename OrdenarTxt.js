var fs= require('fs');
var texto = fs.readFileSync("Frase Desordenada.txt").toString();
var detecta = ",";
var OrDes=texto.split(detecta);
var Oracion= ['Hola', 'mi', 'nombre', 'es', 'Alejandro', 'y', 'me', 'apellido', 'Cruz'];
var aux="";
var auxArr=texto.split(detecta);

for(var i=0; i<OrDes.length; i++){
    for(var j=0; j<OrDes.length; j++){
        if(OrDes[i]===Oracion[j]){
            auxArr[j]=Oracion[j];
        }
    }
}

for(var i=0; i<OrDes.length; i++){
    aux=aux+auxArr[i];
    aux=aux+" ";
}
console.log(aux);