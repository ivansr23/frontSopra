const axios = require('axios');


function getGeneros(){
    return  axios.get('https://ejemplos-dc1c1.firebaseio.com/generos.json')
}
function getPeliculas(genero){
    return axios.get('https://ejemplos-dc1c1.firebaseio.com/peliculas/'+genero+'.json')
}
    

getGeneros().then((resp) => {
    //console.log(resp);
    const datos = resp.data;
    const generos = Object.values(datos);
    console.log(generos)
    let genero = 'sci-fi';
    return getPeliculas(genero);

}).then((resp)=>{
        const peliculas = Object.values(resp.data);
        console.log(peliculas)
    })
new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1)
    },2000)
}).then((resp) => {
    console.log(resp);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(2)
        },2000)
    })
}).then((resp)=>{
    console.log(resp);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(3)
        },2000)
    })
}).then((resp)=>{
    console.log(resp)
})



function promesaJuguete(portadoBien){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(portadoBien){
                console.log('Me he portado bien');
                resolve(true);
            }else{
                console.log('No me he portado bien');
                reject(false);
            }
        },1000)
    })
}

promesaJuguete(false).then((resp) => console.log('vamos a comprar el juguete'))
.catch((err) => console.log('no hay juguete'))