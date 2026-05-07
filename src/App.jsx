import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import products from "./data/products";

function App() {
  const [showSpecial, setShowSpecial] = useState(false);
  const [query, setQuery] = useState("");

  // Filter products by name (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header />
      <Hero />

      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={() => setShowSpecial(!showSpecial)}>
        {showSpecial ? "Hide Special" : "Show Today's Special"}
      </button>

      {showSpecial && filteredProducts.length > 0 && (
          <ProductCard product={filteredProducts[0]} />
        )}

      <Footer />
    </>
  );
}

export default App;