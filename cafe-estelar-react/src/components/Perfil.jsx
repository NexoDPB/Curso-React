import { useState } from "react";
function Perfil() {
  const [nombre, setNombre] = useState("Astronauta");
  const [activo, setActivo] = useState(true);
  const [pedidos, setPedidos] = useState(["Café Nebulosa", "Latte Cósmico"]);
  return (
    <div>
      <h2>Perfil de {nombre}</h2>
      <p>Estado: {activo ? "Activo" : "Inactivo"}</p>
      <p>Pedidos: {pedidos.length}</p>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <button onClick={() => setActivo(!activo)}>
        {activo ? "Desactivar" : "Activar"}
      </button>
    </div>
  );
}
export default Perfil;
