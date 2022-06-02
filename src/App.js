import React, { useState, useEffect } from "react";

//Partiendo del siguiente componente de clase que contempla
// varios métodos de ciclo de vida, convertidlo
// en un componente funcional que realice exactamente lo mismo:
function Clock() {
  const [datos, setDatos] = useState({
    // Se genera una fecha como estado inicial del componente
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José"
  });
  //...
  function tick() {
    setDatos((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad
      };
    });
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2>
        Hora Actual:
        {datos.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {datos.nombre} {datos.apellidos}
      </h3>
      <h1>Edad: {datos.edad}</h1>
    </div>
  );
}
export default Clock;
