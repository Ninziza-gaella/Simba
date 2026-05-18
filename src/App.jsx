import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import CartModal from "./components/CartModal";

import products from "./data/products";

function App() {
  const [showSpecial, setShowSpecial] = useState(false);
  const [query, setQuery] = useState("");

  const [cartItems, setCartItems] = useState([
    products[0],
    products[1],
    products[2],
  ]);

  const [showCart, setShowCart] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  function handleAddToCart(product) {
    console.log("Added:", product.name);

    setCartItems((prev) => [...prev, product]);
  }

  return (
    <>
      <Header
        cartCount={cartItems.length}
        onOpenCart={() => setShowCart(true)}
      />

      <Hero />

      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={() => setShowSpecial(!showSpecial)}>
        {showSpecial
          ? "Hide Special"
          : "Show Today's Special"}
      </button>

      {filteredProducts.length === 0 ? (
        <>
          <p>No products match your search.</p>

          <button onClick={() => setQuery("")}>
            Clear Search
          </button>
        </>
      ) : (
        <div className="product-grid">
          {showSpecial && (
            <ProductCard
              product={filteredProducts[0]}
              onAddToCart={handleAddToCart}
            />
          )}
        </div>
      )}

      {showCart && (
        <CartModal
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
        />
      )}

      <Footer />
    </>
  );
}

export default App;