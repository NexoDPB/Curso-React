{/* less useStatus = less bug = code more simple */}
import { useState } from "react";
function Carrito() {
  const [items, setItems] = useState([
    { nombre: "Café Nebulosa", precio: 3.5 },
    { nombre: "Latte Cósmico", precio: 4.2 },
  ]);

  const total = items.reduce((sum, item) => sum + item.precio, 0);
  const cantidad = items.length;

  function eliminarItem(index) {
    {
      /* it is same like filter((item, posicion) => posicion !== index) only here isn't important item (_) */
    }
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Tu carrito ({cantidad})</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.nombre} — {item.precio.toFixed(2)} €
            <button onClick={() => eliminarItem(index)}>×</button>
          </li>
        ))}
      </ul>
      <p>
        <strong>Total: {total.toFixed(2)} €</strong>
      </p>
    </div>
  );
}

export default Carrito;
