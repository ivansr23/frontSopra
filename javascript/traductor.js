var traductor = (function(){
    const tt = {
        'en': {
            'hola': 'hello',
            'adios': 'bye'
    
        } ,
        'fr': {
            'hola': 'allo',
            'adios': 'adieu'
        },
        'pl': {
            'hola': 'cześć',
            'adios': 'do widzenia'
        },
        'it': {
            'hola': 'ciao',
            'adios': 'addio'
        },
    }
    function traducir(texto,idioma) {
       return "Traducir "+texto+" en idioma "+ idioma+" "+(tt[idioma][texto])
    }
    
    return{
        traducir: traducir,
    }

})()

console.log(traductor.traducir("hola",'pl'))
console.log(traductor.traducir("hola",'en'))
console.log(traductor.traducir("hola",'fr'))
console.log(traductor.traducir("hola",'it'))