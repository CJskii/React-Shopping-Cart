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

  const addItem = (item) => {
    console.log(items);
    const arr = [...items];
    arr.push(item);
    setItems(arr);
    setItemCount(itemCount + 1);
    setBasketTotal(Number(basketTotal) + Number(item.price));
  };

  const removeItem = (item) => {
    const arr = [...items];
    const index = arr.indexOf(item);
    arr.splice(index, 1);
    setItems(arr);
    setItemCount(itemCount - 1);
  };

  return (
    <div
      data-testid="app"
      className="App min-w-full min-h-full flex flex-col items-center justify-center "
    >
      <Navbar itemCount={itemCount} basketTotal={basketTotal} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Shop />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route
          path="/products/:name"
          element={<CategoryItems addItem={addItem} removeItem={removeItem} />}
        />
        <Route path="/products/:name/:id" element={<ItemDetails />} />
        <Route
          path="/basket"
          element={<CartDetails items={items} removeItem={removeItem} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
