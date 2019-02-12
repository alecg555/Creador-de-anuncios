const entrada = document.getElementById("entrada");
const parrafos = document.getElementById("parrafos");
const btn = document.getElementById("btn");
const entradatitulo = document.getElementById("entrada-titulo"), btntitulo = document.getElementById("btn-titulo"), title = document.getElementById("title");
const divtitle = document.getElementById("divtitle"), ocultar = document.getElementById("ocultar"), color = document.getElementById("color");
const dropdown = document.getElementById("dropdown"), btnborde = document.getElementById("btn-borde");
const bgcolor1 = document.getElementById("bgcolor1"), bgcolor2 = document.getElementById("bgcolor2"),body = document.getElementById("body");



const borrar = () => {

   divtitle.remove();

}

const agregartitulo = (agregartitulo) => {

    const valortitulo = entradatitulo.value;

   
    

    title.innerHTML = valortitulo;
}


const agregar = (agregar) => {

    
    const valor = entrada.value;
    
    let text = document.createTextNode(valor);
    let p = document.createElement("p");
    p.appendChild(text);
    let divi = document.createElement("div");
    divi.appendChild(p);
    parrafos.appendChild(divi);


   entrada.value = "";
       

}

const cambiodecolor = () => {
   

  title.style.color = color.value ;

};

const cambiarborde = (borde) =>{

  parrafos.style.borderColor = dropdown.value;

}
const cambiodefondo = (fondo) =>{
   

  body.style.background = "linear-gradient(to right,"+ bgcolor1.value+","+bgcolor2.value+")";

}


ocultar.addEventListener("click",borrar);
btntitulo.addEventListener("click",agregartitulo);
btn.addEventListener("click",agregar);
color.addEventListener("change",cambiodecolor);
btnborde.addEventListener("click",cambiarborde);
bgcolor1.addEventListener("change",cambiodefondo);
bgcolor2.addEventListener("change",cambiodefondo);
