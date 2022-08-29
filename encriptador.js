let input = document.getElementById("input");
let encriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("descriptar");
let copiar = document.getElementById("copiar");
let respuesta = document.getElementById("mensaje-respuesta");

//Encriptar mensaje
function encriptarMensaje(){
    let mensaje = input.value;
    var mensajeEncriptado = [];
  
    for (var i = 0; i < mensaje.length; i++) {
      var letra;
      switch (mensaje[i]) {
        case "a":
          letra = "ai";
          break;
        case "e":
          letra = "enter";
          break;
        case "i":
          letra = "imes";
          break;
        case "o":
          letra = "ober";
          break;
        case "u":
          letra = "ufat";
          break;
        default:
          letra = mensaje[i];
          break;
      }
      mensajeEncriptado.push(letra);
    }
  
    mensaje =mensajeEncriptado.join("");
    
    respuesta.innerHTML = mensaje;
  
    copiar.style.display = "block";
  
    
    document.getElementById("mensaje-carta").style.display = "none";
    document.getElementById("mensaje-respuesta").style.display = "flex";
}

//DESENCRIPTAR MENSAJE
function desencriptarMensaje() {
    let mensaje = input.value.toLowerCase();
  
    var contador = 0;
    while (contador < mensaje.length) {
      if (mensaje.includes("ai")) {
        mensaje = mensaje.replace("ai", "a");
      }
      if (mensaje.includes("enter")) {
        mensaje = mensaje.replace("enter", "e");
      }
      if (mensaje.includes("imes")) {
        mensaje = mensaje.replace("imes", "i");
      }
      if (mensaje.includes("ober")) {
        mensaje = mensaje.replace("ober", "o");
      }
      if (mensaje.includes("ufat")) {
        mensaje = mensaje.replace("ufat", "u");
      }
      contador++;
    }
    
    respuesta.innerHTML = mensaje;
    copiar.style.display = "block";
  
    document.getElementById("mensaje-carta").style.display = "none";
    document.getElementById("mensje-respuesta").style.display = "flex";
  }

//VALIDAR CAMPO
function validarCampo(campo) {

    
    var regresa = /^[a-z][^A-Z]+$/gm;
    var bandera = false;
  
    if (regresa.test(campo)) {
  
      input.classList.add("correcto");
  
      input.classList.remove("error");
  
      document.querySelector(".texto-error").style.display = "none";
  
      bandera = true;
  
   
    } else {
      input.classList.add("error");
      input.classList.remove("correcto");
      document.querySelector(".error").style.display = "block";
  
      bandera = false;
    }
  
    return bandera;
  
  }

  //EVENTOS
  //ENCRIPTAR
  encriptar.addEventListener("click", (event) => {
    event.preventDefault();
  
    validarCampo(input.value);
  
    if (validarCampo(input.value) == false) {
      console.log(validarCampo(input.value));
      document.getElementById("mensaje-carta").style.display = "flex";
      document.getElementById("mensaje-respuesta").style.display = "none";
      input.value = "";
  
    }
    else if(validarCampo(input.value) == true) { 
      encriptar.onclick = encriptarMensaje();
      input.value = "";
    }
  
    })

    //DESENCRIPTAR
    desencriptar.addEventListener("click", (event) => {
        event.preventDefault();
      
        validarCampo(input.value);
      
        if (validarCampo(input.value) == false) {
          console.log(validarCampo(input.value));
          document.getElementById("mensaje-carta").style.display = "flex";
          input.value = "";
      
        }
        else if(validarCampo(input.value) == true) { 
          desencriptar.onclick = desencriptarMensaje();
          document.getElementById("mensaje-carta").style.display = "none";
          input.value = "";
        }
      
      
      });

      //FUNCIÓN COPIAR
      function copiarFn() {
        let content = document.getElementById("respuesta").innerText;
        content.select;
        navigator.clipboard.writeText(content);
      }
      
      copiar.onclick = copiarFn;