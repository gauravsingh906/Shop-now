import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
import { RiDeleteBin5Line } from "react-icons/ri";

function CartItem({ item, itemIndex }) {
    const dispatch = useDispatch();
    function removeFromCart() {
        dispatch(remove(item.id))
        toast.error("Item removed From Cart")
    }

    return (
        <div className="flex items-center p-4 border-b border-gray-500">
            <div className="w-[30%] mr-4">
                <img src={item.images[0]} alt={item.title} className="w-full h-auto object-contain" />
            </div>
            <div className="flex-1 ml-10">
                <h1 className="text-black-700 text-2xl font-bold text-lg text-left mb-5 leading-[25px]">{item.title}</h1>
                <h1 className="text-sm text-gray-700 mb-4">{item.description.split(" ").slice(0, 40).join(" ") + "..."}</h1>
                <div className="flex justify-between items-center">
                    <p className="text-green-600 font-bold text-lg">${item.price}</p>
                    <div onClick={removeFromCart} className="cursor-pointer hover:bg-red-200 rounded-full m-4 p-2 text-2xl hover:text-red-500 transition duration-300">
                        <RiDeleteBin5Line className="text-1xl text-red-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;