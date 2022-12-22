import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  selectAllProducts,
} from "../../stores/menu/productsSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="text-white">
      <h1>Menu</h1>
    </div>
  );
};

export default Menu;
