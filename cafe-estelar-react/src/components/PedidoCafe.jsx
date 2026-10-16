import { useState } from "react";
function PedidoCafe() {
  const [nombre, setNombre] = useState("");
  const [tamanio, setTamanio] = useState("mediano");
  const [extras, setExtras] = useState([]);
  const [enviado, setEnviado] = useState(false);
  function toggleExtra(extra) {
    setExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra],
    );
  }
  function enviarPedido() {
    if (nombre.trim()) setEnviado(true);
  }
  if (enviado) {
    return (
      <div>
        <h2>¡Pedido recibido!</h2>
        <p>Nombre: {nombre}</p>
        <p>Tamaño: {tamanio}</p>
        <p>Extras: {extras.length > 0 ? extras.join(", ") : "Ninguno"}</p>
        <button onClick={() => setEnviado(false)}>Nuevo Pedido</button>
      </div>
    );
  }
  return (
    <div>
      <h2>Nuevo Pedido</h2>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value())}
        placeholder="Tu nombre"
      />
      <div>
        <label>Tamaño: </label>
        <select value={tamanio} onChange={(e) => setTamanio(e.target.value)}>
          <option value="pequenio">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>
      </div>
      <div>
        {["Leche extra", "Canela", "Chocolate"].map((extra) => (
          <label key={extra}>
            <input
              type="checkbox"
              checked={extras.includes(extra)}
              onChange={() => toggleExtra(extra)}
            />
            {extra}
          </label>
        ))}
      </div>
      <button onClick={enviarPedido}>Enviar Pedido</button>
    </div>
  );
}
export default PedidoCafe;
