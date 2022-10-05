const incapacidadSi = document.querySelector(".incapacidad_boton_si");
const incapacidadSiContenido = document.querySelector(".incapacidad_si")

incapacidadSi.addEventListener("click", function(){
   let incapacidad = document.querySelector(".incapacidad")
   incapacidad.style.opacity = "0"
   incapacidad.style.visibility = "hidden";

   const inscrito = document.createElement(`DIV`);
   inscrito.classList.add(`si_inscrito`);
   inscrito.innerHTML = `
   <div class="content_barra">
      <div class="barra">
         <div class="progreso_inscrito" style="--w:60%"></div>
      </div>
   </div>
   <h2>Are you currently enrolled in Medicare parts A & B ?</h2>
   <input type="button" class="inscrito btm_SiNo" value="Yes">
   <input type="button" class="inscrito btm_SiNo" value="No">
   <div class="cuestionario_atras">
      <div class="contenido_flecha">
         <img src="./Flecha.png" alt="">
      </div>
      <p class="retroceder3 btn_back">Previous Question</p>
   </div>`
   incapacidadSiContenido.appendChild(inscrito)
})

ListenerSi()
function ListenerSi() {
   incapacidadSiContenido.addEventListener("click",validarInscritosSi)

   incapacidadSiContenido.addEventListener("click",validarInscritosFemenino)
}
function validarInscritosSi(e){
   if (e.target.classList.contains(`inscrito`)) {
      let siInscrito = document.querySelector(".si_inscrito")
      siInscrito.style.opacity = "0"
      siInscrito.style.visibility = "hidden";

      const siGenero = document.createElement(`DIV`);
      siGenero.classList.add(`si_genero`);
      siGenero.innerHTML = `
      <div class="content_barra">
         <div class="barra">
            <div class="progreso_si_genero" style="--w:80%"></div>
         </div>
      </div>
      <h2>Please select your gender</h2>
      <h3 class="irrelevante">*This is not required</h3>
      <input type="button" class="btn_genero" name="femenino" value="Female">
      <input type="button" class="btn_genero" name="masculino" value="Male">
      <input type="button" class="btn_genero btn_saltar_genero" value="Continue">
      <div class="cuestionario_atras">
         <div class="contenido_flecha">
            <img src="./Flecha.png" alt="">
         </div>
         <p class="retroceder4 btn_back">Previous Question</p>
      </div>`;
      incapacidadSiContenido.appendChild(siGenero)
   }
}

const header2 = document.querySelector(".header")
function validarInscritosFemenino(e) {
   if (e.target.classList.contains(`btn_genero`)) {
      let eliminarTitulos = document.querySelector(".contenido_titulos")
      header2.removeChild(eliminarTitulos)

      let siInscrito = document.querySelector(".si_genero")
      console.log("HOLA")
      siInscrito.style.opacity = "0"
      siInscrito.style.visibility = "hidden";

      let fin = document.querySelector(".fin")
      fin.style.opacity = "1"
      fin.style.visibility = "visible";
   }
}