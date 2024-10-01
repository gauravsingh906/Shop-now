import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/file.png'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
    const cart = useSelector((state) => state.cart)

    return (

        <nav className=" flex justify-around items-center h-20 max-w-6xl mx-auto">
            <NavLink to='/'>
                <div>
                    <img src={logo} className="h-18"></img>
                </div>
            </NavLink>
            <div className="flex flex-center font-medium text-slate-100 mr-5 space-x-6">
                <NavLink to='/'>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/cart'>
                    <div className="mt-1 relative">
                        <FaShoppingCart className="text-2xl"></FaShoppingCart>
                        <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                            {cart.length > 0 && cart.length}</span>
                    </div>
                </NavLink>
            </div>
        </nav>

    );
}

export default NavBar;