const contenido = document.getElementById("contenido");

contenido.innerHTML= "Hellow";



alert("Hola personas de la tierra");

let nombre= "lissette Arevalo";
let edad = 12;
let materia = "Estructura de datos";
let practica = "Aprendiendo sobre JS";


let edades = [12,50,3,16,50,60];

contenido. innerHTML = "<h2>" +nombre+"</h2>";
contenido.innerHTML += "<h3>"+edad+"</h3>";
contenido.innerHTML += "<h4>"+materia+"</h4>";
contenido.innerHTML += "<h5>"+practica+"</h5>";

contenido. innerHTML = `<h2> ${nombre} </h2>`;
contenido. innerHTML += `<h3> ${edad} </h3>`;
contenido. innerHTML += `<h4> ${materia} </h4>`;
contenido. innerHTML += `<h5> ${practica} </h5>`;



if(edad > 18){
    alert(" puedes entrar en la disco");
}else if (edad >13){
    alert("puedes entar con un adulto");
}else{
    alert("No puedes entrar");
}



for (let i = 0; i  <= 10; i++){
    addContent(`<h3> la edad es de ${i} años </h3>`);
}


for (let i = 0; i  < edades.length; i++){
    addContent(`<h3> la edad es de ${edades[i]} años </h3>`); 
}

function addContent(newContent){
    console.log(newContent);
    contenido. innerHTML += newContent;
}

addContent("Hola planeta tierra");



const COLOR_ROJO ="#FF0000";

let resultado ="Nombre:" + nombre;

alert(resultado);


nombre = "Adam Sandler"

alert(nombre);


console.log(nombre);

console.log(nombre);