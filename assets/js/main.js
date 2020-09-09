function capturarDatos() {
  console.log("Inicio de Funcion: Capturar datos");
  /**
   * Tipos de variables
   * var, let, const
   * a
   */
  let txtNombre = document.getElementById("txtNombre");
  let txtCorreo = document.getElementById("txtCorreo");
  let txtMensaje = document.getElementById("txtMensaje");
  console.log(txtNombre.value, txtCorreo.value , txtMensaje.value);
 }

 const capturarDatos2 = () => {
  let txtNombre = document.getElementById("txtNombre");
  let txtCorreo = document.getElementById("txtCorreo");
  let txtMensaje = document.getElementById("txtMensaje");
  console.log(txtNombre.value, txtCorreo.value , txtMensaje.value);
 }

 const metodos = {
   capturarDatos3:() => { 
    let txtNombre = document.getElementById("txtNombre");
    let txtCorreo = document.getElementById("txtCorreo");
    let txtMensaje = document.getElementById("txtMensaje");
    let validacion = validarInformacion(txtCorreo.value, txtNombre.value, txtMensaje.value);
    console.log("Validacion: ", validacion);
   }
    };

 const validarInformacion = (correo, nombre, mensaje) =>{
   if (correo.length > 0 && nombre.length > 0 &&  mensaje.length > 0) {
     return true;
   } else {
     return false;
   }
 };
