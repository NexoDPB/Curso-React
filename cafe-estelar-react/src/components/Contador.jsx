{/* Actualiza el valor y hace que vuelva a renderizar */}
import { useState } from "react";
function Contador() {
  const [cuenta, setCuenta] = useState(0);
  return (
    <div>
      <p>Haz pulsado {cuenta} veces</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Incrementa</button>
    </div>
  );
}
export default Contador;
