import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Shop from "./Components/Products/Shop";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <div className="App h-full flex-col align-middle justify-center ">
      <Navbar />
      <div className="container min-h-full min-w-full">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Shop />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
