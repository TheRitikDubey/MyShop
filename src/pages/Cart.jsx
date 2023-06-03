import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="border-2 border-gray-300">
            <div>
              <div className="bg-yellow-500 p-2 text-xl text-center">Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p className="bg-re">Total Amount: ${totalAmount}</p>
            </div>
          </div>
          {/* Checkout button */}
          <div>
            <button className="bg-green-500 m-2 p-2 text-center w-[100%]">
              CheckOut Now
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="bg-">Cart Empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
