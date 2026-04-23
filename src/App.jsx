import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import products from "./data/products";

function App() {
  return (
    <>
      <Header />
      <ProductCard product={products[0]}/>
      <Hero />
      <Footer />
    </>
  );
}

export default App;