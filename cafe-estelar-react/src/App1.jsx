import ProductCard from "./components/ProductCard";

function App1() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ color: "#61DAFB" }}>Café Estelar</h1>
      <ProductCard
        nombre="Café Nebulosa"
        descripcion="Espresso con leche de avena y canela estelar"
        precio={3.5}
        categoria="Espresso"
      />
      <ProductCard
        nombre="Latte Cósmico"
        descripcion="Café con leche, vainilla y polvo de estrella"
        precio={4.2}
        categoria="Latte"
      />
      <ProductCard
        nombre="Té supernova"
        descripcion="Té verde con jengibre y miel del asteroide B-612."
        precio={3.0}
        categoria="Té"
      />
    </div>
  );
}
export default App1;
