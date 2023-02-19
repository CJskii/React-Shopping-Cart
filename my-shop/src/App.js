import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Shop from "./Components/Products/Shop";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import CategoryItems from "./Components/Products/Category/CategoryItems";
import ItemDetails from "./Components/Products/Category/ItemDetails";

function App() {
  return (
    <div
      data-testid="app"
      className="App min-w-full min-h-full flex flex-col items-center justify-center "
    >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Shop />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route path="/products/:name" element={<CategoryItems />} />
        <Route path="/products/:name/:id" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
