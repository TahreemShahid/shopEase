import React, { useState, useContext } from "react";
import { CartProvider, CartContext } from "./CartContext";
import { WishlistProvider, WishlistContext } from "./WishlistContext";
import { ToastProvider } from "./ToastContext";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Header from "./Header";
import Wishlist from "./Wishlist";
import "./App.css";

function AppContent() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  return (
    <>
      <Header
        onWishlistClick={() => setWishlistOpen(true)}
        onCartClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        wishlistCount={wishlist.length}
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
      />
      <Wishlist open={wishlistOpen} onClose={() => setWishlistOpen(false)} />
      <div className="app-container">
        <h1>   </h1>
        <ProductList />
        <Cart />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <AppContent />
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  );
}
