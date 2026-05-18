import { useEffect, useState } from "react";

const TestFetching = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://192.168.1.95:5000/products");

      const data = await response.json();

      console.log("Fetched products:", data);

      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Test Fetching Products</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default TestFetching;