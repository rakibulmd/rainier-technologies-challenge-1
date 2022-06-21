import React from "react";

const Product = ({ product }) => {
    return (
        <div className="p-5 flex gap-3 bg-gray-200 rounded-md">
            <div className="w-[150px] h-[150px] bg-red-500 flex-none"></div>
            <div className="flex-auto">
                <h2>{product?.name}</h2>
                <p className="text-sm">{product?.description}</p>
            </div>
            <div className="flex flex-col justify-end gap-2 flex-none">
                <button className="px-3 py-1 bg-gray-300 rounded-md">
                    Add to list
                </button>
                <button className="px-3 py-1 bg-gray-300 rounded-md ">
                    Details
                </button>
            </div>
        </div>
    );
};

export default Product;
