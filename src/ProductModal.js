import React from "react";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal product-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} title="Close">×</button>
        <div className="product-modal-img-wrap">
          <img
            src={product.image}
            alt={product.name}
            className="product-modal-img"
          />
        </div>
        <h2 className="product-modal-title">{product.name}</h2>
        <div className="product-modal-price">${product.price}</div>
        <div className="product-modal-category"><b>Category:</b> {product.category}</div>
        <div className="product-modal-desc"><b>Description:</b> A wonderful {product.name} for your needs!</div>
        <hr className="product-modal-divider" />
        <div className="product-modal-section">
          <b>Reviews:</b>
          <ul className="product-modal-reviews">
            <li className="product-modal-review-item">5/5 - Great product! <span className="review-user">- User1</span></li>
            <li className="product-modal-review-item">4/5 - Good value. <span className="review-user">- User2</span></li>
          </ul>
        </div>
        <div className="product-modal-section">
          <b>FAQ:</b>
          <ul className="product-modal-faq">
            <li>Q: Is this product returnable? <br />A: Yes, within 7 days.</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 