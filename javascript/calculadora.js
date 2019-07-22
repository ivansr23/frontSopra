



var micalculador = (function(){
    function suma(n1,n2) {
        return n1 + n2;
    }
    function resta(n1, n2){
        return n1 - n2;
    }
    function multiplicar(n1,n2){    
        return n1 * n2;
    }
    function division(n1,n2){    
        return n1 / n2;
    }
    console.log("funcion autoejecutable")
    return{
        suma: suma,
        resta: resta,
        multiplicar: multiplicar,
        division: division,
    }

})()

console.log('suma: '+ micalculador.suma(1,2))