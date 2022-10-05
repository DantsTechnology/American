const validacionesNo = document.querySelector(".incapacidad_no")

contenidoValidacion()
function contenidoValidacion() {
   validacionesNo.addEventListener("click",retrocederUno)
   validacionesNo.addEventListener("click",retrocederDos)
   validacionesNo.addEventListener("click",retrocederTres)
   validacionesNo.addEventListener("click",retrocederCuatro)
   validacionesNo.addEventListener("click",retrocederCinco)
   validacionesNo.addEventListener("click",retrocederSeis)
}

const contenidoIncapacidadNo = document.querySelector(".incapacidad_no")

function retrocederUno (e) {
   if (e.target.classList.contains(`atrasUno`)) {
      let quitarGenero = document.querySelector(".no_genero")
      contenidoIncapacidadNo.removeChild(quitarGenero)

      let visivilidadIncapacidad = document.querySelector(".incapacidad")
      visivilidadIncapacidad.style.opacity = "1"
      visivilidadIncapacidad.style.visibility = "visible";
   }
}

function retrocederDos(e) {
   if (e.target.classList.contains(`atrasDos`)) {
      let quitarIngresos = document.querySelector(".no_ingreso")
      contenidoIncapacidadNo.removeChild(quitarIngresos)

      let visivilidadGenero = document.querySelector(".no_genero")
      visivilidadGenero.style.opacity = "1"
      visivilidadGenero.style.visibility = "visible";
   }
}

function retrocederTres(e) {
   if (e.target.classList.contains(`atrasTres`)) {
      let quitarHogar = document.querySelector(".no_hogar")
      contenidoIncapacidadNo.removeChild(quitarHogar)

      let visivilidadIngreso = document.querySelector(".no_ingreso")
      visivilidadIngreso.style.opacity = "1"
      visivilidadIngreso.style.visibility = "visible";
   }
}

function retrocederCuatro(e) {
   if (e.target.classList.contains(`atrasCuatro`)) {
      let quitarAltura = document.querySelector(".no_altura")
      contenidoIncapacidadNo.removeChild(quitarAltura)

      let visivilidadHogar = document.querySelector(".no_hogar")
      visivilidadHogar.style.opacity = "1"
      visivilidadHogar.style.visibility = "visible";
   }
}

function retrocederCinco(e) {
   if (e.target.classList.contains(`atrasCinco`)) {
      let quitarPeso = document.querySelector(".no_peso")
      contenidoIncapacidadNo.removeChild(quitarPeso)

      let visivilidadAltura = document.querySelector(".no_altura")
      visivilidadAltura.style.opacity = "1"
      visivilidadAltura.style.visibility = "visible";
   }
}

function retrocederSeis(e) {
   if (e.target.classList.contains(`atrasSeis`)) {
      let quitarPeso = document.querySelector(".no_tabaco")
      contenidoIncapacidadNo.removeChild(quitarPeso)

      let visivilidadPeso = document.querySelector(".no_peso")
      visivilidadPeso.style.opacity = "1"
      visivilidadPeso.style.visibility = "visible";
   }
}