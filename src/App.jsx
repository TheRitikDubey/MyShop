import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/signUp"

const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
};

export default App;
