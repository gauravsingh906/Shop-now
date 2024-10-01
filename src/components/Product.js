import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../redux/slices/cartSlice'
import { useEffect, useState } from "react";

function Product({ post }) {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart")
    }

    const removerFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item Remove from cart");
    }



    return (
        <div className="flex flex-col  items-center justify-between hover:scale-110 transition 
        duration-300
        shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]
        ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
            <div >
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[12px] text-left" >{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className="h-[180px]">
                <img className=" h-full w-full" src={post.images[0]} alt={post.title}></img>
            </div>
            <div className="flex justify-between gap-12 items-center  w-full mt-5">
                <div>
                    <p className="text-green-600 font-bold text-lg ">${post.price}</p>
                </div>

                {cart.some((p) => p.id === post.id) ? (
                    <button onClick={removerFromCart}
                        className="text-red-800 border-2 transition duration-300 ease-in border-gray-700 hover:bg-gray-700 hover:text-white rounded-full font-extrabold text-[12px] uppercase p-1 px-3">
                        Remove Item
                    </button>
                ) : (
                    <button onClick={addToCart}
                        className="text-gray-800 border-2 transition duration-300 ease-in border-gray-700 hover:bg-gray-700 hover:text-white rounded-full font-extrabold text-[12px] uppercase p-1 px-3">
                        Add to cart
                    </button>
                )}
            </div>

        </div>
    );
}

export default Product;