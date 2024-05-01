const stockActual = 0 //Constante que define el contenido del silo (stock actual).

//Función que permite conocer el estado del silo.
function estadoDelSilo() {
  let estado;

  do { //Se utilizo el do While para que el usuario pueda reintentar su respuesta en caso de esta ser inválida sin reiniciar el programa.
      estado = prompt("Bienvenido al sistema de gestión de silos de la cooperativa 'LA PERDEDORA'.\n\nPor favor, ingrese el estado actual del silo: \n\n1 = Limpio y ventilado\n2 = No se encuentra en condiciones:");

      if (estado === "1") {
          alert("El silo se encuentra en aptas condiciones de uso.");
      } else if (estado === "2") {
          alert("El silo no está en condiciones de almacenar maíz. Por favor, realice las tareas de mantenimiento.");
      } else {
          alert("Opción inválida. Por favor, pruebe con los números indicados a continuación.");
      }
  } while (estado !== "1");
}


//Función que da a conocer el stock actual del silo (previo al ingreso del camión).
function verificarStockActual() {
  alert(`Actualmente la cantidad almacenada de maíz es de: ${stockActual} toneladas.`);
}

//Función para recibir y comprobar la calidad del maíz.
function recibirMaiz() {
  let calidad;
  
  do {
      calidad = prompt("Por favor, ingresa la calidad del maíz que será introducido en el silo: \n1 = Buena calidad\n2 = Contiene cuerpos extraños\n3 = Se encuentra húmedo");

      switch (calidad) {
          case "1":
              alert("El maíz cumple con los estándares de calidad. Se almacenará en el silo principal.");
              break;
          case "2":
              alert("El maíz tiene cuerpos extraños. Se almacenará en el silo reservado número 2.");
              break;
          case "3":
              alert("El maíz tiene humedad. Se almacenará en el silo reservado número 3.");
              break;
          default:
              alert("La opción ingresada no es válida. Por favor, intente con (1, 2, 3)");
      }
  } while (calidad !== "1" && calidad !== "2" && calidad !== "3");
}

//Función que mantiene el stock actualizado.
function actualizarStock(cantidad) {

  stockActualizado = stockActual + cantidad;

  alert(`El camión transportador descargó ${cantidad} toneladas de maíz.\n\nEl stock actualizado del silo es de ${stockActualizado} toneladas.\n\nEl mismo sera comunicado automáticamente a los supervisores, gerentes y operarios.`);
}


//Acá se invocan las funciones para poner en funcionamiento el sistema.
estadoDelSilo();
verificarStockActual();
recibirMaiz();
actualizarStock(3000);


