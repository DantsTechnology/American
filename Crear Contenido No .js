const incapacidadNo = document.querySelector(".incapacidad_boton_no");
const incapacidadNoContenido = document.querySelector(".incapacidad_no");

incapacidadNo.addEventListener("click", function () {
  let esconder = document.querySelector(".incapacidad");
  esconder.style.opacity = "0";
  esconder.style.visibility = "hidden";

  let noGenero = document.createElement(`DIV`);
  noGenero.classList.add(`no_genero`);
  noGenero.innerHTML = `
   <div class="content_barra">
      <div class="barra">
         <div class="progreso_no_genero" style="--w:48%"></div>
      </div>
   </div>
   <h2>Please select your gender</h2>
   <h3 class="irrelevante">*This is not required</h3>
   <input type="button" class="genero btn_genero" name="femenino" value="Female">
   <input type="button" class="genero btn_genero" name="masculino" value="Male">
   <input type="button" class="genero btn_saltar_genero" value="Continue">
   <div class="cuestionario_atras">
      <div class="contenido_flecha">
         <img src="./Flecha.png" alt="">
      </div>
      <p class="atrasUno btn_back">Previous Question</p>
   </div>`;
  incapacidadNoContenido.appendChild(noGenero);
});

ListenerNo();
function ListenerNo() {
  incapacidadNoContenido.addEventListener("click", continuarIngresos);
  incapacidadNoContenido.addEventListener("click", continuarHohar);
  incapacidadNoContenido.addEventListener("click", continuarAltura);
  incapacidadNoContenido.addEventListener("click", continuarPeso);
  incapacidadNoContenido.addEventListener("click", continuarTabaco);
  incapacidadNoContenido.addEventListener("click", validarFinal);

  incapacidadNoContenido.addEventListener("click", sliderIngresos);
  incapacidadNoContenido.addEventListener("touchstart", sliderIngresos);
}

function sliderIngresos(e) {
  if (e.target.classList.contains(`rango_largo`)) {
    const valor = document.querySelector(".valor_dinero");
    const inputRango = document.getElementById("rango");
    inputRango.oninput = () => {
      valor.innerHTML = inputRango.value;
    };
  }
}
function continuarIngresos(e) {
  if (e.target.classList.contains(`genero`)) {
    let esconder = document.querySelector(".no_genero");
    esconder.style.opacity = "0";
    esconder.style.visibility = "hidden";

    let noIngreso = document.createElement(`DIV`);
    noIngreso.classList.add(`no_ingreso`);
    noIngreso.innerHTML = `
      <div class="content_barra">
         <div class="barra">
            <div class="progreso_ingreso" style="--w:57%"></div>
         </div>
      </div>
      <h2>What is your estimated household income?</h2>
      <p class="irrelevante">*Income level does not affect your rate.</p>
      <div class="range">
         <div class="sliderValue">
            <p class="valor_moneda">$</p>
            <p class="valor_dinero">45</p>
            <p class="valor_mas">,000 or more</p>
         </div>
         <div class="field">
            <div class="value left">$21K</div>
            <input type="range" min="21" max="69" value="45" id="rango" class="rango_largo">
            <div class="value right">$69K</div>
         </div>
      </div>
      <p class="ContinuarHogar">Continue</p>
      <div class="cuestionario_atras">
         <div class="contenido_flecha">
            <img src="./Flecha.png" alt="">
         </div>
         <p class="atrasDos btn_back">Previous Question</p>
      </div>`;

    incapacidadNoContenido.appendChild(noIngreso);
  }
}

function continuarHohar(e) {
  if (e.target.classList.contains(`ContinuarHogar`)) {
    let esconder = document.querySelector(".no_ingreso");
    esconder.style.opacity = "0";
    esconder.style.visibility = "hidden";

    let noHogar = document.createElement(`DIV`);
    noHogar.classList.add(`no_hogar`);
    noHogar.innerHTML = `
      <div class="content_barra">
         <div class="barra">
            <div class="progreso_hogar" style="--w:65.5%"></div>
         </div>
      </div>
      <h2>How many people reside in your household?</h2>
      <div class="contenedor_havitantes">
         <span class="boton_casa">1</span>
         <span class="boton_casa">2</span>
         <span class="boton_casa">3</span>
         <span class="boton_casa">4</span>
         <span class="boton_casa">5</span>
         <span class="boton_casa">6</span>
         <span class="boton_casa">7</span>
         <span class="boton_casa">8</span>
      </div>
      <div class="cuestionario_atras">
         <div class="contenido_flecha">
            <img src="./Flecha.png" alt="">
         </div>
         <p class="atrasTres btn_back">Previous Question</p>
      </div>`;

    incapacidadNoContenido.appendChild(noHogar);
  }
}

function continuarAltura(e) {
  if (e.target.classList.contains(`boton_casa`)) {
    let esconder = document.querySelector(".no_hogar");
    esconder.style.opacity = "0";
    esconder.style.visibility = "hidden";

    let noAltura = document.createElement(`DIV`);
    noAltura.classList.add(`no_altura`);
    noAltura.innerHTML = `
      <div class="content_barra">
         <div class="barra">
            <div class="progreso_altura" style="--w:74%"></div>
         </div>
      </div>
      <h2>How tall are you?</h2>
      <div class="contenedor_Altura">
         <div class="Pies">
            <label for="ft">Feet</label>
            <select id="ft" data-required="true">
               <option value="">ft.</option>
               <option value="3">3'</option>
               <option value="4">4'</option>
               <option value="5">5'</option>
               <option value="6">6'</option>
               <option value="7">7'</option>
            </select>
         </div>
         <div class="Pulgadas">
            <label for="in">Inches</label>
            <select id="in" data-required="true">
               <option value="">in.</option>
               <option value="0">0"</option>
               <option value="1">1"</option>
               <option value="2">2"</option>
               <option value="3">3"</option>
               <option value="4">4"</option>
               <option value="5">5"</option>
               <option value="6">6"</option>
               <option value="7">7"</option>
               <option value="8">8"</option>
               <option value="9">9"</option>
               <option value="10">10"</option>
               <option value="11">11"</option>
            </select>
         </div>
      </div>
      <p class="ContinuarPeso">Continue</p>
      <div class="cuestionario_atras">
         <div class="contenido_flecha">
            <img src="./Flecha.png" alt="">
         </div>
         <p class="atrasCuatro btn_back">Previous Question</p>
      </div>`;

    incapacidadNoContenido.appendChild(noAltura);
  }
}

function continuarPeso(e) {
  if (e.target.classList.contains(`ContinuarPeso`)) {
    let ft = document.getElementById("ft");
    let inn = document.getElementById("in");
    let valueFt = ft.value;
    let valueIn = inn.value;
    console.log(valueFt);
    console.log(valueIn);
    if (valueFt.length < 1 && valueIn.length < 1) {
      alert("select your height");
    } else {
      let esconder = document.querySelector(".no_altura");
      esconder.style.opacity = "0";
      esconder.style.visibility = "hidden";

      let noPeso = document.createElement(`DIV`);
      noPeso.classList.add(`no_peso`);
      noPeso.innerHTML = `
         <div class="content_barra">
            <div class="barra">
               <div class="progreso_peso" style="--w:82%"></div>
            </div>
         </div> 
         <h2>What is your weight?</h2>
         <input class="virificar_peso" type="text" maxlength="3">
         <p class="ContinuarTabaco">Continue</p> 
         <div class="cuestionario_atras">
            <div class="contenido_flecha">
               <img src="./Flecha.png" alt="">
            </div>
            <p class="atrasCinco btn_back">Previous Question</p>
         </div>`;

      incapacidadNoContenido.appendChild(noPeso);
    }
  }
}

function continuarTabaco(e) {
  if (e.target.classList.contains(`ContinuarTabaco`)) {
    validarP = document.querySelector(".virificar_peso").value;
    if (validarP > 900) {
      alert("The weight may not be greater than 900.");
    } else if (validarP < 15) {
      alert("enter your weight")
    } else {
      let esconder = document.querySelector(".no_peso");
      esconder.style.opacity = "0";
      esconder.style.visibility = "hidden";

      let noTabaco = document.createElement(`DIV`);
      noTabaco.classList.add(`no_tabaco`);
      noTabaco.innerHTML = `
         <div class="content_barra">
            <div class="barra">
               <div class="progreso_tabaco" style="--w:91%"></div>
            </div>
         </div>     
         <h2>Do you use tobacco?</h2>
         <div class="contenedor_tabaco">                     
            <input type="button" class="continuarFin" value="Yes">
            <input type="button" class="continuarFin" value="No">
         </div>
         <div class="cuestionario_atras">
            <div class="contenido_flecha">
               <img src="./Flecha.png" alt="">
            </div>
            <p class="atrasSeis btn_back">Previous Question</p>
         </div>`;

      incapacidadNoContenido.appendChild(noTabaco);
    }
  }
}

const header = document.querySelector(".header");
function validarFinal(e) {
  if (e.target.classList.contains(`continuarFin`)) {
    let eliminarTitulos = document.querySelector(".contenido_titulos");
    header.removeChild(eliminarTitulos);

    let esconder = document.querySelector(".no_tabaco");
    esconder.style.opacity = "0";
    esconder.style.visibility = "hidden";

    let fin = document.querySelector(".fin");
    fin.style.opacity = "1";
    fin.style.visibility = "visible";
  }
}
