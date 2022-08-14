let socio;
let lider;
let detalleBuro;
let dias;
let codRegistrado;
let newCel;
let hora;
let txt1 = " Estimad@ ";
let txt2 = " agradecemos nos contacte por este medio y ofrecemos una disculpa por el tiempo de espera, en respuesta a su solicitud de servicio le informamos ";



function iniciarScript() {
    let botonSiguiente1 = document.getElementById('btn-siguiente1');
    botonSiguiente1.addEventListener('click', respSocioLider);

    let botonSiguiente2 = document.getElementById('btn-siguiente2');
    botonSiguiente2.addEventListener('click', respSocioLider);
};


// funcion para mostrar la fecha actual en el script
function mostrarFecha(){
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let agnio = fecha.getFullYear();
// aumentamos el cero si el mes tiene un digito
    mes = ('0' + mes).slice(-2);

    let fechActual = `${dia}-${mes}-${agnio}`;

    return fechActual;
};

// con está función convertimos el primer caracter de una palabra a mayuscula 
function mayuscula(socioMayuscula) {
    let socio = socioMayuscula.split(" ").map(socioMayus => {
        return socioMayus[0].toUpperCase() + socioMayus.slice(1).toLowerCase();
    })

    return socio.join(" ");
};


function respSocioLider() {
    //input de socios
    let inputRtmaSocio = document.getElementById('rtma-socio');
    let inputReaprSocio = document.getElementById('reapr-socio');
    let inputDocsSocio = document.getElementById('docs-socio');
    let inputActCel = document.getElementById('act-cel');
    let inputActAdress = document.getElementById('act-adress');
    let inputRtmaNoSocio = document.getElementById('rtma-no-socio');
    let inputReaprNoSocio = document.getElementById('reapr-no-socio');
    let inputActNoCel = document.getElementById('act-no-cel');
    let inputRedNoSocio = document.getElementById('red-no-socio');
    let inputCelActSocioNo = document.getElementById('act-cel-si-socio-no');
    let inputAgendaSocio = document.getElementById('agenda-socio');
    let inputReaprNoAtrPriComp = document.getElementById('reapr-no-atraso-primera-compra');
    // input de lider
    let inputRtmaLider = document.getElementById('rtma-lider');
    let inputReaprLider = document.getElementById('reapr-lider');
    let inputDocsLider = document.getElementById('docs-lider');
    let inputActCelLd = document.getElementById('act-cel-ld');
    let inputActAdressLd = document.getElementById('act-adress-ld');
    let inputRtmaNoLd = document.getElementById('rtma-no-ld');
    let inputReaprNoLd = document.getElementById('reapr-no-ld');
    let inputActNoCelLd = document.getElementById('act-no-cel-ld');
    let inputRedNold = document.getElementById('red-no-ld');
    let inputComprbNoRedLd = document.getElementById('comprobante-no-red-lider');
    let inputCelActSocioNoLd = document.getElementById('act-cel-si-socio-no-ld');
    let inputAgendaLd = document.getElementById('agenda-ld');
    let inputReaprNoAtrsPrimCompLd = document.getElementById('reapr-no-atr-prim-comp-ld');

    if (inputRtmaSocio.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"));
        alert(mostrarFecha() + txt1 + socio + txt2 + " que su requerimiento fue procesado exitosamente y su crédito se encuentra aprobado.");
    } else if (inputReaprSocio.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"));
        alert(mostrarFecha() + txt1 + socio + txt2 + " que su requerimiento fue procesado y la reapertura de su crédito fue aprobado.");
    } else if (inputDocsSocio.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"));
        alert(mostrarFecha() + txt1 + socio + txt2 + " que documentos adjuntos pasan al area respetiva para su verificación.");
    } else if (inputActCel.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"));
        alert(mostrarFecha() + txt1 + socio + txt2 + " que el cambio de número telefónico fue procesado exitosamente.");
    } else if (inputActAdress.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"));
        alert(mostrarFecha() + txt1 + socio + txt2 + " que el cambio de dirección domiciliaria fue procesado exitosamente según planilla de servicios adjunta.");
    } else if (inputRtmaNoSocio.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"));
        alert(mostrarFecha() + txt1 + socio + txt2 + " que su requerimiento no pudo ser procesado ya que se le está generando una nueva llamada y no tenemos una respuesta a nuestro llamado telefónico para la validación de datos y aprobación del crédito.");
    } else if (inputReaprNoSocio.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"));
        detalleBuro = prompt("Ingrese memo del buro");
        alert(mostrarFecha() + txt1 + socio + txt2 + " que la reapertura de su código no procede por la siguiente información detallada." + detalleBuro + ".");
    } else if (inputReaprNoAtrPriComp.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"));
        dias = prompt("Ingrese los dias de atraso");
        alert(mostrarFecha() + txt1 + socio + txt2 + " que la reapertura de su código no procede ya que tuvo un atraso de " + dias + " dias en su primera compra y solo puede realizar compras de contado.");
    } else if (inputActNoCel.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"));
        newCel = prompt("Ingrese nuevo numero celular");
        codRegistrado = prompt("Celular registrado bajo el codigo");
        alert(mostrarFecha() + txt1 + socio + txt2 + " que su requerimiento no pudo ser procesado ya que numero celular " + newCel + " ya se encuentra registrado bajo el codigo " + codRegistrado + ".");
    } else if (inputRedNoSocio.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"));
        alert(mostrarFecha() + txt1 + socio + txt2 + " que su requerimiento no puede ser procesado ya que al momento se verifica el análisis de red actualizado a la cual usted pertenece y la red mantiene los cupos elevados.");
    } else if (inputCelActSocioNo.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"))
        alert(mostrarFecha() + txt1 + socio + txt2 + " que el cambio de número telefónico fue procesado, pero no tenemos respuesta a las llamadas telefónicas que se les está generando para la respectiva validación de datos.");
    } else if (inputAgendaSocio.checked) {
        socio = mayuscula(prompt("Ingrese nombre del socio"));
        hora = prompt("Ingresar hora de llamada");
        alert(mostrarFecha() + txt1 + socio + txt2 + " que se procede con el agendamiento de llamada telefónica para la verificación de datos a las " + hora + " del día de hoy según su requerimiento.");
    } else if (inputRtmaLider.checked) { // -- INPUT LIDER --
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        alert(mostrarFecha() + txt1 + lider + txt2 + " que su requerimiento fue procesado y el crédito del código " + socio + " se encuentra aprobado.");
    } else if (inputReaprLider.checked) {
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        alert(mostrarFecha() + txt1 + lider + txt2 + " que la reapertura del código " + socio + " fue procesada exitosamente.");
    } else if (inputDocsLider.checked) {
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        alert(mostrarFecha() + txt1 + lider + txt2 + " que documentos del código " + socio + " pasa al área de crédito para la respectiva verificación.");
    } else if (inputActCelLd.checked) {
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        alert(mostrarFecha() + txt1 + lider + txt2 + " que el cambio de número telefónico del código " + socio + " fue procesado exitosamente.");
    } else if (inputActAdressLd.checked) {
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        alert(mostrarFecha() + txt1 + lider + txt2 + " que el cambio de dirección domiciliaria del código " + socio + " fue procesado exitosamente según planilla de servicios adjunta.");
    } else if (inputRtmaNoLd.checked) {
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        alert(mostrarFecha() + txt1 + lider + txt2 + " que su requerimiento no pudo ser procesado ya que se está generando la llamada al código " + socio + " y no tenemos una respuesta a nuestro llamado para la validación de datos y aprobación del crédito.");
    } else if (inputReaprNoLd.checked) {
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        detalleBuro = prompt("Ingrese memo del buro")
        alert(mostrarFecha() + txt1 + lider + txt2 + " que la reapertura del código " + socio + " no procede por la siguiente información detallada." + detalleBuro + ".");
    } else if (inputReaprNoAtrsPrimCompLd.checked) {
        lider = mayuscula(prompt("Ingrese nombre del lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        dias = prompt("Ingrese los dias de atraso");
        alert(mostrarFecha() + txt1 + lider + txt2 + " que la reapertura del código " + socio + " no procede ya que tuvo un atraso de " + dias + " dias en su primera compra y solo puede realizar compras de contado.");
    } else if (inputActNoCelLd.checked) {
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        alert("Estimad@ " + lider + " script " + socio + " pendiente.");
    } else if (inputCelActSocioNoLd.checked) {
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        alert(mostrarFecha() + txt1 + lider + txt2 + " que el cambio de número telefónico del codigo " + socio + " fue procesado, pero no tenemos respuesta a las llamadas telefónicas que se les está generando para la respectiva validación de datos.");
    } else if (inputAgendaLd.checked) {
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        hora = prompt("Ingrese la hora para la llamada");
        alert(mostrarFecha() + txt1 + lider + txt2 + " que se procede con el agendamiento de llamada telefónica para la verificación de datos del codigo " + socio + " a las " + hora + " del día de hoy según su requerimiento.");
    } else if (inputRedNold.checked) {
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        alert(mostrarFecha() + txt1 + lider + txt2 + " que su requerimiento no puede ser procesado ya que al momento se verifica el análisis de red actualizado del codigo " + socio + " a la cual pertenece y la red mantiene los cupos elevados.");
    } else if (inputComprbNoRedLd.checked) {
        lider = mayuscula(prompt("Ingrese nombre de lider"));
        socio = mayuscula(prompt("Ingrese código de socio"));
        let codComprobante = prompt("Ingrese codigo del socio que esta en el comprobante");
        alert(mostrarFecha() + txt1 + lider + txt2 + " que su requerimiento no puede ser procesado ya que al momento se verifica el análisis de red actualizado del codigo " + socio + " y la red mantiene los cupos elevados. Adicional informarle que se verifica el comprobante de pago adjunto y el codigo " + codComprobante + " no pertence a la red directa la cual se esta analisando.");
    } else {
        alert("Por favor selecciona una opcion");
    };

}

















window.addEventListener('load', iniciarScript);