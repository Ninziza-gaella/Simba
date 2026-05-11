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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  function handleAddToCart(product){
    console.log("Added: ",product.name);
  }

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
      {filteredProducts.length === 0 ?(
<>
<p>No products match your search.</p>
<button onClick={()=>setQuery("")}>Clear Search</button>
</>
      ):(
        showSpecial && (
          <ProductCard
          product={filteredProducts[0]}
          onAddToCart={handleAddToCart}
/>        )
      )}
      <Footer />
    </>
  );
}

export default App;