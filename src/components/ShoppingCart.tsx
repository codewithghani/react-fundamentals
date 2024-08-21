// import React from 'react'
interface Props {
  cartItems: string[];
  onClear: () => void;
}
const ShoppingCart = ({ cartItems, onClear }: Props) => {
  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <p>{item}</p>
        ))}
      </ul>
      <button onClick={onClear} type="button">
        {" "}
        Clear Shopping Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
