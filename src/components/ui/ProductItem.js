import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function ProductItem({ product }) {
  return (
    <div className=" bg-white flex flex-col gap-y-1 relative items-center text-center p-3">
      <button className="absolute top-3 right-3 w-8 h-8 bg-white flex items-center justify-center border border-gray-200 rounded-lg text-brand-color hover:bg-brand-color hover:text-brand-yellow hover:border-brand-color transition-all shadow-lg">
        <AiOutlinePlus />
      </button>
      <img src={product.image} alt={product.title} />
      <div className="text-sm font-semibold text-brand-color">
        {product.price}
      </div>
      <div className="text-sm font-semibold text-gray-600">{product.title}</div>
      <div className="text-gray-400">{product.alt}</div>
    </div>
  );
}

export default ProductItem;
