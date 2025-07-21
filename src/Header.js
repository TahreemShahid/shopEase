import React from "react";

export default function Header({ onWishlistClick, onCartClick, wishlistCount, cartCount }) {
  return (
    <header className="main-header">
      <div className="brand">ShopEase</div>
      <div className="header-actions">
        <button className="header-btn" onClick={onWishlistClick} title="Wishlist">
          Wishlist
          {wishlistCount > 0 && <span className="header-badge">{wishlistCount}</span>}
        </button>
        <button className="header-btn" onClick={onCartClick} title="Cart">
          Cart
          {cartCount > 0 && <span className="header-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
} 