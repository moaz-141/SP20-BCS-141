import React from "react";
import { useSelector } from "react-redux";

import Tabs from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
import { selectAllProducts } from "../../stores/menu/productsSlice";

const Cart = () => {
  const cart = useSelector(selectAllProducts);
  const tabs = ["Summary", "Delivery", "Payment"];

  if (!cart || cart.products.length === 0) {
    return (
      <div className="bg-white h-full text-black flex justify-center p-4">
        <h1>Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
