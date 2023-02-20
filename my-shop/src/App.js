import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Shop from "./Components/Products/Shop";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import CategoryItems from "./Components/Products/Category/CategoryItems";
import ItemDetails from "./Components/Products/Category/ItemDetails";
import CartDetails from "./Components/ShoppingCart/CartDetails";

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState([]);
  const [basketTotal, setBasketTotal] = useState(0);
  const [theme, setTheme] = useState("luxury");

  const changeTheme = (e) => {
    const selected = e.target.textContent.toLowerCase();
    setTheme(selected);
  };

  const addItem = (item, qty) => {
    if (isInTheBasket(item)) {
      return adjustQuantity(item, qty);
    } else {
      const arr = [...items];
      item.qty = qty;
      arr.push(item);
      setItems(arr);
      setItemCount(itemCount + 1);
      setBasketTotal(Number(basketTotal) + Number(item.price));
    }
  };

  const removeItem = (item) => {
    const arr = [...items];
    const index = arr.indexOf(item);
    arr.splice(index, 1);
    setItems(arr);
    setItemCount(itemCount - 1);
    setBasketTotal(Number(basketTotal) - Number(item.price));
  };

  const isInTheBasket = (item) => {
    const findItem = items.filter((arrItem) => arrItem === item);
    if (findItem.length > 0) return true;
    else return false;
  };

  const adjustQuantity = (item, qty) => {
    const arr = [...items];
    const index = arr.indexOf(item);
    arr[index].qty = Number(arr[index].qty) + Number(qty);
    setItems(arr);
    setBasketTotal(Number(basketTotal) + item.price * qty);
  };

  return (
    <div
      data-theme={theme}
      data-testid="app"
      className="App min-w-full min-h-full flex flex-col items-center justify-center"
    >
      <Navbar
        itemCount={itemCount}
        basketTotal={basketTotal}
        changeTheme={changeTheme}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Shop />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route
          path="/products/:name"
          element={<CategoryItems addItem={addItem} removeItem={removeItem} />}
        />
        <Route
          path="/products/:name/:id"
          element={<ItemDetails addItem={addItem} />}
        />
        <Route
          path="/basket"
          element={
            <CartDetails
              items={items}
              removeItem={removeItem}
              basketTotal={basketTotal}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
