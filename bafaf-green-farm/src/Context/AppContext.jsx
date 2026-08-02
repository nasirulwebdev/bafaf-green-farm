
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ১. শপিং কার্ট-এ প্রোডাক্ট বা সার্ভিস যোগ করার মূল ফাংশন
  const addToCart = (item) => {
    setCart((prevCart) => {
      const exists = prevCart.find((cartItem) => cartItem.id === item.id);
      if (exists) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // ২. কার্ট থেকে কোনো আইটেম সম্পূর্ণ রিমুভ করার ফাংশন
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // ৩. উইশলিস্ট-এ কোনো আইটেম যোগ বা রিমুভ (Toggle) করার ফাংশন
  const toggleWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.find((wishItem) => wishItem.id === item.id);
      if (exists) {
        return prevWishlist.filter((wishItem) => wishItem.id !== item.id);
      }
      return [...prevWishlist, item];
    });
  };
  // ৪. বন্ধুকে কাস্টম মেসেজ সহ কোনো প্রোডাক্ট বা সার্ভিস উইশ/শেয়ার করার ফাংশন
  const wishToFriend = (item, platform = "whatsapp") => {
    const itemName = item.name || item.title;
    const itemLink = item.path || item.link || window.location.href;
    const fullLink = itemLink.startsWith("http") ? itemLink : `${window.location.origin}${itemLink}`;
    
    const message = `Hi! See this amazing farm item from BAFAF Green Farm: *${itemName}*. I am wishing to share this with you! Check details here: ${fullLink}`;
    const encodedMessage = encodeURIComponent(message);
    
    if (platform === "whatsapp") {
      window.open(`https://whatsapp.com{encodedMessage}`, "_blank");
    } else if (platform === "facebook") {
      window.open(`https://facebook.com{encodeURIComponent(fullLink)}&quote=${encodedMessage}`, "_blank");
    } else {
      navigator.clipboard.writeText(message);
      alert("Wish text copied to clipboard! Send it to your friend.");
    }
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        toggleWishlist,
        wishToFriend,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// গ্লোবাল স্টেট ব্যবহারের জন্য কাস্টম হুক
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
