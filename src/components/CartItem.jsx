import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="border-b border-gray-300 p-4 flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="text-gray-600">{item.description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-green-600">${item.price.toFixed(2)}</p>
          <div
            className="cursor-pointer text-red-600"
            onClick={removeFromCart}
          >
            <FcDeleteDatabase className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
