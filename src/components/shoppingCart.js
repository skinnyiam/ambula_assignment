import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const ShoppingCartPage = () => {
  // Access the cartItems, addToCart, removeFromCart, and cartTotal from the context
  const { cartItems, addToCart, removeFromCart } = useContext(AppContext);

  // State for the new item input
  const [newItem, setNewItem] = useState("");

  // Handle the form submission to add a new item to the shopping cart
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() === "") {
      return; // Do not add an empty item
    }
    addToCart(newItem);
    setNewItem(""); // Clear the input field
  };

  // Handle removing an item from the shopping cart
  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a new item"
        />
        <button type="submit">Add Item</button>
      </form>
      <p>Total Items: {cartItems.length}</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCartPage;
