async function obtenerDatos(){
    const response = await fetch("http://127.0.0.1:5500/practico_contactos.json");
    const json=await response.json();
    console.log(json);
    //document.writeln(json);
   //console.log(JSON.stringify(json));
   console.log(json.nombre);
   console.log(json.direccion.ciudad);
   json.experiencia.forEach(element => {
    console.log(element.empresa);
   });

  console.log(json.direccion.pago_agua);
  console.log(json.direccion["pago_agua"]);
console.log(json["direccion"]["pago_agua"]);
}

obtenerDatos(); 