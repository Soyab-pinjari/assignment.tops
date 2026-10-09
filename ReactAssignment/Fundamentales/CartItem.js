
import React, { useState } from 'react';

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <h2>Cart Item: T-Shirt</h2>
      <p>Quantity: {quantity}</p>

      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default CartItem;
