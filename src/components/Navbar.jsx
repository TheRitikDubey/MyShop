import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const currentPath = window.location.pathname;
 const handleLogOut = () => {
  const user = localStorage.getItem("email");
  localStorage.removeItem("email");
  window.location.reload();
  toast.success(`Logged out ${user}`);
 } 
//  useEffect(() => {
//   localStorage.removeItem("email");
// }, [handleLogOut])
 
  return (
    <>
      <div>
        <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
          <NavLink to="/">
            <div className="ml-5">
              <img src="../logo.png" className="h-14" />
            </div>
          </NavLink>

          {/* {!currentPath.includes("") ?  */}
          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <h2>Home</h2>
            </NavLink>
            <NavLink to="/orders">
              <h2>My Orders</h2>
            </NavLink>
            <NavLink to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-2xl" />
                {cart.length > 0 && (
                  <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                  >
                    {cart.length}
                  </span>
                )}
              </div>
            </NavLink>
            <button className="bg-white rounded-md text-black p-2" onClick={handleLogOut}>
              Logout
            </button>
          </div>  

          
        </nav>
      </div>
    </>
  );
};

export default Navbar;
