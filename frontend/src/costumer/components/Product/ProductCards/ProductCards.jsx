import React from "react";

const ProductCards = ({ product }) => {
  return (
    <div key={product.id} className="group relative border p-1 my-2 w-[15rem]">
      <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        {product.discount ? (
          <div className="absolute top-2 left-0 bg-pink-800 rounded-full text-xs text-white p-1">
            {Math.ceil((product.discount / product.price) * 100)}% OFF
          </div>
        ) : (
          <></>
        )}
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4">
        <div>
          <h3 className="text-[#0F1111] text-base font-medium font-mono">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <div className="flex justify-between my-2">
            {/* Star rating */}
            <div className="flex items-center py-2 px-2 space-x-px">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-3 h-3 ${
                    index < product.rating
                      ? "text-yellow-400"
                      : "text-gray-400"
                  } sm:w-4 sm:h-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {product.limitedDeal ? (
              <div className="bg-red-800 py-1 px-2 text-white font-medium">
                Limited Deal
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="mt-2 px-2">
          {product.discount ? (
            <div className="flex gap-2">
              <p className="text-sm font-bold text-gray-900 sm:text-xl md:text-xl">
                ₹{product.discount}
              </p>
              {/* Original price with strike-through */}
              <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500">
                ₹{product.price}
              </del>
            </div>
          ) : (
            // Display regular price
            <p className="text-sm font-bold text-gray-900 sm:text-xl md:text-xl">
              ₹{product.price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
