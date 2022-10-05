const atrasUno = document.querySelector(".retroceder1")
const atrasDos = document.querySelector(".retroceder2")

atrasUno.addEventListener("click", function() {

   let formUno = document.querySelector(".form1")
   let FormDos = document.querySelector(".form2")

   formUno.style.opacity = "1"
   formUno.style.visibility = "visible";

   FormDos.style.opacity = "0"
   FormDos.style.visibility = "hidden";

   console.log("hola")
})

atrasDos.addEventListener("click", function() {
   let FormDos = document.querySelector(".form2")
   let formTres = document.querySelector(".form3")
   FormDos.style.opacity = "1"
   FormDos.style.visibility = "visible";

   formTres.style.opacity = "0"
   formTres.style.visibility = "hidden";

   console.log("hola")
})


const validaciones = document.querySelector(".incapacidad_si")
conenedorValidacion()
function conenedorValidacion() {
   validaciones.addEventListener("click",atrasTres)
   validaciones.addEventListener("click",atrasCuatro)
}

const contenidoIncapacidadSi = document.querySelector(".incapacidad_si")
function atrasTres (e) {
   if (e.target.classList.contains(`retroceder3`)) {
      let eliminarInscrito = document.querySelector(".si_inscrito")
      contenidoIncapacidadSi.removeChild(eliminarInscrito)

      let visivilidadIncapacidad = document.querySelector(".incapacidad")
      visivilidadIncapacidad.style.opacity = "1"
      visivilidadIncapacidad.style.visibility = "visible";
      console.log("hola")
   }
}

function atrasCuatro (e) {
   if (e.target.classList.contains(`retroceder4`)) {
      let eliminarGenero = document.querySelector(".si_genero")
      contenidoIncapacidadSi.removeChild(eliminarGenero)

      let visivilidadIncapacidad = document.querySelector(".si_inscrito")
      visivilidadIncapacidad.style.opacity = "1"
      visivilidadIncapacidad.style.visibility = "visible";
      console.log("hola")
   }
}