import React from "react";

function Category({ category: { id, title, image } }) {
  return (
    <a
      href="#"
      className="flex flex-col group items-center text-center p-4 hover:bg-purple-50 hover:rounded-md gap-y-2 transition-all "
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded-sm border-gray-100 "
      />
      <span className="group-hover:text-primary-brand-color text-sm font-semibold whitespace-nowrap text-gray-700 tracking-tight">
        {title}
      </span>
    </a>
  );
}

export default Category;
