import React from "react";

const Product = ({ product }) => {
    return (
        <div className="p-5 flex gap-3 bg-gray-200 rounded-md">
            <div className="flex flex-1 gap-3 items-center">
                <div className="w-[150px] flex-none h-[150px] bg-red-500 flex justify-center items-center text-white rounded-sm">
                    <p>150 x 150</p>
                </div>
                <div className="">
                    <h2>{product?.name}</h2>
                    <p className="text-xs">
                        {product?.description.length > 50
                            ? product?.description.slice(0, 50) + "..."
                            : product.description}
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-end gap-2 flex-none">
                <button className="px-3 py-1 bg-gray-300 rounded-md text-xs">
                    Add to list
                </button>
                <button className="px-3 py-1 bg-gray-300 rounded-md text-xs">
                    Details
                </button>
            </div>
        </div>
    );
};

export default Product;
