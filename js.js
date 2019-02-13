const entrada = document.getElementById("entrada");
const parrafos = document.getElementById("parrafos");
const btn = document.getElementById("btn");
const entradatitulo = document.getElementById("entrada-titulo"), btntitulo = document.getElementById("btn-titulo"), title = document.getElementById("title");
const divtitle = document.getElementById("divtitle"), ocultar = document.getElementById("ocultar"), color = document.getElementById("color");
const bgcolor1 = document.getElementById("bgcolor1"), bgcolor2 = document.getElementById("bgcolor2"),body = document.getElementById("body"),bgcolor3 = document.getElementById("bgcolor3");
const bordercolor = document.getElementById("bordercolor"),border = document.getElementById("border");
const entradaunica = document.getElementById("entradaunica"), btnunico =  document.getElementById("btnunico"),btnborrar = document.getElementById("btnborrar");
const respaldo = document.getElementById("respaldo");
const backup = divtitle;
  

let i= 0 ;
let cambio;


const borrar = (respaldo) => {
     

   divtitle.remove();

}

const agregartitulo = (agregartitulo) => {

    const valortitulo = entradatitulo.value;

   
    

    title.innerHTML = valortitulo;
}


const agregar = (agregar) => {
  let largo = entrada.value.length;

  if (largo > 64) {
    alert("Maximo 64 Caracteres Por Parrafo ");
  }
  else{
   parrafos.setAttribute("class","parrafos")
    
    const valor = entrada.value;
    
    let text = document.createTextNode(valor);
    let p = document.createElement("p");
    p.appendChild(text);
    let divi = document.createElement("div");
    divi.appendChild(p);
    divi.setAttribute("id",i);
    parrafos.appendChild(divi);


   entrada.value = "";
       
   i++;
 }
}

const cambiodecolor = () => {
   

  title.style.color = color.value ;

};


const cambiodefondo = (fondo) =>{
   

  body.style.background = "linear-gradient(to right,"+ bgcolor1.value+","+bgcolor2.value+")";

}

const fondounico = (unico)=>{ 

   
   body.style.background = bgcolor3.value;
    
}
const brcolor = (br) => {

   border.style.border = "15px solid "+bordercolor.value;


}
const parrafounico = (unico) => {
  let largo = entradaunica.value.length;

  if (largo > 64) {
    alert("Maximo 64 Caracteres Por Parrafo ");
  }
  else{
    parrafos.setAttribute("class","parrafounico");

 
    const valor = entradaunica.value;
    
    let text = document.createTextNode(valor);
    let p = document.createElement("p");
    p.appendChild(text);
    let divi = document.createElement("div");
    divi.appendChild(p);
    divi.setAttribute("id",i);
    parrafos.appendChild(divi);

i++;
   entradaunica.value = "";

}
}
const sacardiv = () =>{
   
    respaldo.appendChild(backup);
  

}

const borrarparrafo = (borrar)=>{

  i--;
  
  let cambio = i.toString();


   document.getElementById(cambio).remove();
  

}

ocultar.addEventListener("click",borrar);
btntitulo.addEventListener("click",agregartitulo);
btn.addEventListener("click",agregar);
color.addEventListener("change",cambiodecolor);

bgcolor1.addEventListener("change",cambiodefondo);
bgcolor2.addEventListener("change",cambiodefondo);
bgcolor3.addEventListener("change",fondounico);
bordercolor.addEventListener("change",brcolor);
btnunico.addEventListener("click",parrafounico)
title.addEventListener("click",sacardiv);
btnborrar.addEventListener("click",borrarparrafo);