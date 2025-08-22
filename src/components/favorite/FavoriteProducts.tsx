"use client";
import { store } from "@/src/lib/store";
import Image from "next/image";
import React from "react";
import AddToCartBtn from "../AddToCartBtn";
import { MdClose } from "react-icons/md";
import toast from "react-hot-toast";
import Link from "next/link";
import { FaCheck, FaHeart } from "react-icons/fa";
import PriceTag from "../PriceTag";

const FavoriteProducts = () => {
  const { favoriteProduct, removeFromFavorite, resetFavorite } = store();
  const handleResetButton = () => {
    const confirmReset = confirm(
      "Are you sure you want to reset the favorite list?"
    );
    if (confirmReset) {
      resetFavorite();
      toast.success("Favorite list has been reset!");
    }
  };

  console.log(favoriteProduct);

  return (
    <div className="mt-5 border p-5 space-y-4">
      {favoriteProduct?.length > 0 ? (
        favoriteProduct?.map((item) => (
          <div
            key={item?.id}
            className="border-b pb-4 grid col-span-3 md:grid-cols-6 gap-y-2 md:gap-y-0 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center gap-2 md:col-span-2">
              <MdClose
                className="text-base hover:text-red-600 hoverEffect"
                onClick={() => {
                  removeFromFavorite(item?.id),
                    toast.success(
                      `${item?.title.substring(
                        0,
                        12
                      )}... removed from favorite!`
                    );
                }}
              />
              {item?.images && (
                <Link
                  href={{
                    pathname: `/product/${item?.id}`,
                    query: { id: item?.id },
                  }}
                  className="border rounded-md overflow-hidden group"
                >
                  <Image
                    src={item?.images[0]}
                    alt="ProductImage"
                    width={100}
                    height={100}
                    loading="lazy"
                    className="group-hover:scale-110 hoverEffect w-20 h-20 object-contain"
                  />
                </Link>
              )}
              <p className="text-sm font-semibold line-clamp-1">
                {item?.title}
              </p>
            </div>
            <p className="flex items-center text-sm gap-1">
              Brand: <span className="font-medium">{item?.brand}</span>
            </p>
            <p className="flex items-center text-black/80">
              {item?.availabilityStatus && (
                <p className="flex space-x-2 text-sm text-gray-700">
                  <FaCheck className="text-lg text-green-500" />{" "}
                  <span>In Stock</span>
                </p>
              )}
            </p>

            <PriceTag
              regularPrice={
                item?.quantity ? item?.price * item?.quantity : item?.price
              }
              discountedPrice={item?.price - item?.discountPercentage / 100}
            />

            <div className="flex items-center justify-start md:justify-center w-full">
              <AddToCartBtn
                product={item}
                className="w-full items-center mb-0 self-center"
              />
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-10 md:py-20 text-center">
          <FaHeart className="h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">No Favorite Products</h2>
          <p className="text-gray-600 mb-4">
            You haven&apos;t added any products to your favorites yet.
          </p>
          <Link href="/">Explore Products</Link>
        </div>
      )}
      {favoriteProduct?.length > 0 && (
        <button
          onClick={handleResetButton}
          className="text-sm px-4 py-2 border rounded-md text-gray-600 hover:text-red-600 cursor-pointer hover:border-red-400 duration-300"
        >
          Reset favorite list
        </button>
      )}
    </div>
  );
};

export default FavoriteProducts;
