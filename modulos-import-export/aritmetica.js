function suma(a,b){
    return a+b;
}
function resta(a,b){
    return a-b;
}
//la palabra reservada export se utiliza para enviar la informacion, para ser importada desde otro archivo.
export const aritmetica={
    // en los objetos literales poner en este caso "suma", es lo mismo que poner "suma = suma", de igual manera que con "resta".
    suma,
    resta
}
