import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const paymentMethods = [
  { label: "Card", value: "card" },
  { label: "UPI", value: "upi" },
  { label: "Cash on Delivery", value: "cod" },
];

export default function Cart() {
  const { cart, removeFromCart, setCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [success, setSuccess] = useState(false);

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setShowModal(false);
    setSuccess(true);
    setCart([]);
    setTimeout(() => setSuccess(false), 3500);
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  return (
    <div className="cart">
      <div className="cart-title">
        Cart ({cart.reduce((sum, item) => sum + item.qty, 0)} items)
      </div>
      {cart.length === 0 && <div className="empty-cart">Cart is empty</div>}
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <span className="cart-item-name">{item.name}</span>
          <span className="cart-item-qty">
            <button onClick={() => updateQty(item.id, -1)} disabled={item.qty === 1}>-</button>
            x {item.qty}
            <button onClick={() => updateQty(item.id, 1)}>+</button>
          </span>
          <span>${item.price * item.qty}</span>
          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <div className="cart-total">Total: ${total}</div>
      {cart.length > 0 && (
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      )}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal checkout-modal">
            <button className="modal-close" onClick={() => setShowModal(false)} title="Close">×</button>
            <h2>Checkout</h2>
            <div className="order-summary">
              <b>Order Summary:</b>
              <ul className="order-summary-list">
                {cart.map(item => (
                  <li key={item.id} className="order-summary-item">
                    <span>{item.name} x {item.qty}</span>
                    <span className="order-summary-price">${item.price * item.qty}</span>
                  </li>
                ))}
              </ul>
              <div className="order-summary-total">Total: ${total}</div>
            </div>
            <form onSubmit={handlePayment} className="payment-form">
              <div className="payment-methods">
                {paymentMethods.map((m) => (
                  <label key={m.value} className={`payment-label${paymentMethod === m.value ? ' active' : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value={m.value}
                      checked={paymentMethod === m.value}
                      onChange={() => setPaymentMethod(m.value)}
                    />
                    {m.label}
                  </label>
                ))}
              </div>
              {paymentMethod === "card" && (
                <input className="payment-input" type="text" placeholder="Card Number" required />
              )}
              {paymentMethod === "upi" && (
                <input className="payment-input" type="text" placeholder="UPI ID" required />
              )}
              <button className="pay-btn" type="submit">Confirm Order </button>
            </form>
          </div>
        </div>
      )}
      {success && <div className="success-msg">Payment successful! Thank you for your purchase.</div>}
    </div>
  );
} 