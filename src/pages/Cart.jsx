import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-100 p-4 rounded-md">
              <div className="text-lg font-semibold mb-4">Your Cart</div>
              <div className="mb-4">Summary</div>
              <p className="mb-4">
                <span className="font-semibold">Total Items:</span>{" "}
                {cart.length}
              </p>

              <div>
                <p className="mb-4">
                  <span className="font-semibold">Total Amount:</span> ${totalAmount.toFixed(2)}
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Check Out Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
