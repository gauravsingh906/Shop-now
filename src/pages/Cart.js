import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

function Cart() {
    const cart = useSelector(state => state.cart)
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    return (
        <div className="max-w-[1200px] mx-auto py-6 px-4">
            {
                cart.length > 0 ? (
                    <div className="relative flex flex-col lg:flex-row justify-between gap-8">
                        {/* Cart Items Section */}
                        <div className="overflow-y-scroll lg:overflow-auto h-[450px] w-full lg:w-[60%] max-w-[600px] space-y-6 border border-gray-200 rounded-lg p-4 shadow-lg bg-gradient-to-r from-gray-50 to-gray-100">
                            {cart.map((item, index) => (
                                <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
                            ))}
                        </div>
                        {/* Summary Section */}
                        <div className="w-full lg:w-[35%] mt-6 lg:mt-0 flex flex-col items-left bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-lg p-6 max-w-[350px]">
                            <div className="bg-gray-50 p-6 rounded-lg animate-fadeIn">
                                <div className="text-2xl font-bold text-left leading-[20px]">Your Cart</div>
                                <div className="text-5xl text-green-500 font-semibold mb-4 text-left">Summary</div>
                                <p className="my-6"><span className="font-bold">Total Items: {cart.length}</span></p>
                            </div>
                            <div className="mt-4">
                                <p className="text-xl font-bold mb-4">Total Amount: ${totalAmount.toFixed(2)}</p>
                                <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 transform hover:scale-105">CheckOut Now</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] animate-fadeIn">
                        <h1 className="text-2xl font-bold mb-4">Cart Empty</h1>
                        <Link to="/">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105">Shop Now</button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export default Cart;
