
function Header({ cartCount, onOpenCart }) {
  console.log(onOpenCart);
  return (
    <header className="header">
      <h1 >Karibu Simba Supermarket!</h1>

      <button onClick ={onOpenCart}>
        Cart ({cartCount})
      </button>
    </header>
  );
}

export default Header;