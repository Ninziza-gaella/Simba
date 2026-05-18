function ProductCard({ product ,onAddToCart}) {
  const { name, price, image , inStock} = product;

  const formattedPrice = new Intl.NumberFormat("en-RW", {
    style: "currency",
    currency: "RWF"
  }).format(price);

  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{formattedPrice}</p>
      {!inStock &&(
        <p style={{color:"red",fontWeight:"bold"}}>
          Out of stock
        </p>
      )}
      <button onClick={()=> onAddToCart(product)} disabled={!inStock}>Add to cart</button>
    </div>
  );
}

export default ProductCard;