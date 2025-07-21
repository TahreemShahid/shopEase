import React, { useContext } from "react";
import { WishlistContext } from "./WishlistContext";

export default function Wishlist({ open, onClose }) {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} title="Close">×</button>
        <h2>Wishlist</h2>
        {wishlist.length === 0 && <div style={{ color: '#888' }}>No items in wishlist.</div>}
        {wishlist.map(item => (
          <div key={item.id} className="wishlist-modal-item">
            <img src={item.image} alt={item.name} />
            <div style={{ flex: 1, textAlign: 'left' }}>{item.name}</div>
            <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
} 