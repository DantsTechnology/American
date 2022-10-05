const continuarUno = document.querySelector(".Continuar1")
const continuarDos = document.querySelector(".Continuar2")

continuarUno.addEventListener("click", function() {
   verificarT = document.querySelector(".virificar_tamaño").value
   if (verificarT.length > 4 ) {
      let formUno = document.querySelector(".form1")
      let FormDos = document.querySelector(".form2")
      formUno.style.opacity = "0"
      formUno.style.visibility = "hidden";

      FormDos.style.opacity = "1"
      FormDos.style.visibility = "visible";
      console.log("hola")
   } else {
      alert("invalid zip code")
   }
})

continuarDos.addEventListener("click", function() {
   let FormDos = document.querySelector(".form2")
   let formTres = document.querySelector(".form3")
   FormDos.style.opacity = "0"
   FormDos.style.visibility = "hidden";

   formTres.style.opacity = "1"
   formTres.style.visibility = "visible";

      console.log("hola")
})