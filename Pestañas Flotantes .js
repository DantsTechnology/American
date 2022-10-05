const body = document.querySelector("body")
flotanteClick()
function flotanteClick() {
   body.addEventListener("click",abrirPoliticas)
   body.addEventListener("click",abrirTerminos)
   body.addEventListener("click",abrirMarketing)
}


const privacidadC = document.querySelector(".conteneror_privacidad")
const privacidad = document.querySelector(".contenido_privacidad")
function abrirPoliticas(e) {
   if (e.target.classList.contains(`btn_politicas`)) {
      privacidadC.style.opacity = "1";
      privacidadC.style.visibility = "visible";
      privacidad.classList.toggle("privacidad_cerrar");
   }
}
window.addEventListener(`click`, function(e) {
   if(e.target == privacidadC){
      privacidad.classList.toggle("privacidad_cerrar");
      setTimeout(function(){
         privacidadC.style.opacity = "0";
         privacidadC.style.visibility = "hidden";
      }, 500);
   }
})


const condicionesC = document.querySelector(".conteneror_condiciones")
const condiciones = document.querySelector(".contenido_condiciones")
function abrirTerminos(e) {
   if (e.target.classList.contains(`btn_terminos`)) {
      condicionesC.style.opacity = "1";
      condicionesC.style.visibility = "visible";
      condiciones.classList.toggle("condiciones_cerrar");
   }
}
window.addEventListener(`click`, function(e) {
   console.log(e.target);
   if(e.target == condicionesC){
      condiciones.classList.toggle("condiciones_cerrar");
      setTimeout(function(){
         condicionesC.style.opacity = "0";
         condicionesC.style.visibility = "hidden";
      }, 500);
   }
})


const sociosC = document.querySelector(".conteneror_socios")
const socios = document.querySelector(".contenido_socios")
function abrirMarketing(e) {
   if (e.target.classList.contains(`btn_marketing`)) {
      sociosC.style.opacity = "1";
      sociosC.style.visibility = "visible";
      socios.classList.toggle("socios_cerrar");
   }
}
window.addEventListener(`click`, function(e) {
   console.log(e.target);
   if(e.target == sociosC){
      socios.classList.toggle("socios_cerrar");
      setTimeout(function(){
         sociosC.style.opacity = "0";
         sociosC.style.visibility = "hidden";
      }, 500);
   }
})