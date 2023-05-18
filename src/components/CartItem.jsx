
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="p-8">

      <div className="border-black rounded-md">

        <div>
          <img src={item.image} width="100" height="100" />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}>
              <button className="bg-red-500 p-2 border rounded-lg">Remove</button>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
