import Badge from "./Badge";
function ProductCard({ nombre, descripcion, precio, categoria }) {
  return (
    <div>
      <div className="card__header">
        <h3>{nombre}</h3>
        <Badge texto={categoria} />
      </div>
      <p>{descripcion}</p>
      <span className="precio">{precio.toFixed(2)} €</span>
    </div>
  );
}
export default ProductCard