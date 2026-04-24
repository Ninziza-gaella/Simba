import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import products from "./data/products";

function App() {
  return (
    <>
      <Header name={"Simba"} />
      <Hero />

      <button onClick={() => setShowSpecial(!showSpecial)}>
        Show Today's Special
      </button>

      {showSpecial && <ProductCard product={products[0]} />}

      <Footer />
    </>
  );
}


export default App;