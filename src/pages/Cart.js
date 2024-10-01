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
        <div className=" max-w-[800px] mx-auto py-6 px-4">
            {
                cart.length > 0 ?
                    (
                        <div className=" relative flex flex-col md:flex-row justify-between gap-8">
                            <div className="overflow-y-scroll h-[450px] md:w-[60%] space-y-6">
                                {cart.map((item, index) => <CartItem key={item.id} item={item} itemIndex={index}></CartItem>)}
                            </div>
                            <div className=" fixed right-4 md:w-[35%] mt-6 md:mt-0 flex flex-col items-left">
                                <div className="bg-gray-50 p-6 pl-0 rounded-lg">
                                    <div className="text-2xl font-bold  text-left leading-[20px]">Your Cart</div>
                                    <div className="text-5xl text-green-500 font-semibold mb-4 text-left">Summary</div>
                                    <p className="my-6 "><span className="font-bold">Total Items: {cart.length}</span></p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-xl font-bold mb-4">Total Amount: ${totalAmount.toFixed(2)}</p>
                                    <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">CheckOut Now</button>
                                </div>
                            </div>
                        </div>)
                    :
                    (<div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
                        <h1 className="text-2xl font-bold mb-4"> Cart Empty</h1>
                        <Link to="/">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Shop Now</button>
                        </Link>
                    </div>)}
        </div>
    );
}

export default Cart;