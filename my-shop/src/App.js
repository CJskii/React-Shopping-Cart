import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Shop from "./Components/Products/Shop";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import CategoryItems from "./Components/Products/Category/CategoryItems";

function App() {
  return (
    <div className="App min-h-full flex flex-col items-center justify-center ">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Shop />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route path="/products/:name" element={<CategoryItems />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
