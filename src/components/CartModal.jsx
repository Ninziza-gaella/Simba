import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function CartModal({ cartItems, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current.focus();
  }, []);

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        )}

        <button
          ref={closeButtonRef}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

export default CartModal;