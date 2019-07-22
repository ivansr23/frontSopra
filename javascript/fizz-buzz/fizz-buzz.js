function fizzBuzz(){
    var numero = 15
    if((numero%3 == 0)&&(numero%5 == 0)){
        return ("Fizz-Buzz")
    }

    if (numero%3 == 0){
        return(numero+" Fizz")
    }

    if(numero%5 == 0){
        return(numero+" Buzz")
    }
    return (numero)
}

console.log(fizzBuzz())