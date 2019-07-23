function getGenerosPeliculas(cb){
    let xht = new XMLHttpRequest();
    xht.open('GET','https://ejemplos-dc1c1.firebaseio.com/generos.json');
    xht.addEventListener('readystatechange', ()=>{
        if(xht.status === 200 && xht.readyState === 4){
            let resp =JSON.parse(xht.responseText)
            //console.log(resp);
            //const generos = ['sci-fi']
            let generos = getArrayFromObject(resp)
            console.log(generos)
            cb(generos)            
            
        }
    })
    xht.send();
}
function getArrayFromObject(obj){
    const valores = [];
    for(let key in obj){
        let val = obj[key];
        valores.push(val);
    }
    return valores;
}

getGenerosPeliculas()


function getPeliculasDeGenero(genero){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.status === 200 && xhr.readyState === 4){
            console.log(xhr.responseText)
            const datos = JSON.parse(xhr.responseText)
            console.log(datos)
        }
    })
    xhr.send()
}

getPeliculasDeGenero('sci-fi')



function elegirGenero(datos){
    let genero = prompt('Elige un genero de los siguientes:'+datos)
    return genero;
}

getGenerosPeliculas((generos) => {
    let genero = elegirGenero(generos)
    getPeliculasDeGenero(genero)
})

getGenerosPeliculas((generos)=>{
    //obtener todas las peliculas de todos los generos.
    console.log('H')
})




//PROMESAS
