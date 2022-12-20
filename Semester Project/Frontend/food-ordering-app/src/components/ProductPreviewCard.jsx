import React from "react";

const ProductPreviewCard = ({ product }) => {
  return (
    <div className="w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center">
      <img src={product.imageUrl} alt={product.name} />
      <h3 className="pb-2 text-lg">{product.name}</h3>
      <p className="mb-2 h-20 line-clamp-4">{product.description}</p>
    </div>
  );
};

export default ProductPreviewCard;
