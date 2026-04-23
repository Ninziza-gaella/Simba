function ProductCard({ product }) {
  const { name, price, image } = product;

  const formattedPrice = new Intl.NumberFormat("en-RW", {
    style: "currency",
    currency: "RWF"
  }).format(price);

  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{formattedPrice}</p>
    </div>
  );
}

export default ProductCard;