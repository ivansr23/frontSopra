document.getElementById("generos").addEventListener("change",(event)=>{
    damePeliculas(event.target.value)
})

function getGenerosPeliculas(cb){
    let xht = new XMLHttpRequest();
    xht.open('GET','https://ejemplos-dc1c1.firebaseio.com/generos.json');
    xht.addEventListener('readystatechange', ()=>{
        if(xht.status === 200 && xht.readyState === 4){
            let resp =JSON.parse(xht.responseText)
            let generos = getArrayFromObject(resp)
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
function dameGeneros(){
    getGenerosPeliculas((generos) => {
        generos.forEach(genero => {
            var option='<option value="'+genero+'">'+genero+'</option>';
            var btn = document.createElement("option");
            btn.innerHTML=option;
            document.getElementById("generos").appendChild(btn);
        })
    })
}
function getPeliculasDeGenero(genero,callb){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)
    xhr.addEventListener('readystatechange',()=>{
        if(xhr.status === 200 && xhr.readyState === 4){
            const datos = JSON.parse(xhr.responseText)
            let peliculas = getArrayFromObject(datos)
            callb(peliculas)
            
        }
    })
    xhr.send()
}
dameGeneros()

function damePeliculas(genero){
    getPeliculasDeGenero(genero,(datos) => {
        document.getElementById("peliculas").innerHTML="";
        datos.forEach(dato => {
            
            var txt='<li>'+dato+'</li>';
            var btn = document.createElement("li");
            btn.innerHTML=txt;
            document.getElementById("peliculas").appendChild(btn);
        })
    })
}
