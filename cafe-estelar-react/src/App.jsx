import "./App.css";
{
  /*
  This is a hook that creates a state variable.
  This returns an array: [currentValue, updateFunction]
  
  */
}

import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("Astronauta");
  const [pedidos, setPedidos] = useState(0);

  return (
    <div className="cafeteria">
      <h1>Café Estelar</h1>
      <p className="saludo">Bienvenido, {nombre}!</p>
      <div className="pedidos">
        <p>
          Pedidos Realizados: <strong>{pedidos}</strong>
        </p>
        <button onClick={() => setPedidos(pedidos + 1)}>Pedir un cafe</button>
      </div>
      <div className="nombre">
        <label>Tu nombre: </label>
        <input
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
        />
      </div>
    </div>
  );
}

export default App;
