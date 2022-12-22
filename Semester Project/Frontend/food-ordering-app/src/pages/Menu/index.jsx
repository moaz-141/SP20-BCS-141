import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  selectAllProducts,
} from "../../stores/menu/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";
import Tabs from "../../components/Tabs";

const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="bg-white">
      {products.status !== "fulfilled" ? (
        <div>Loading...</div>
      ) : (
        <div className="menu-wrapper">
          <div className="menu-items flex flex-row">
            {products.products && (
              <Tabs
                list={products.products.map((product) => product.name.name)}
                activeTab={activeTab}
                onTabSwitch={setActiveTab}
              />
            )}
          </div>
          <div className="flex flex-row mx-3">
            {products.products &&
              products.products[0].products.map((product, index) => {
                return <ProductDetailCard key={index} product={product} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
