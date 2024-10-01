import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div >
      <div className="bg-slate-800 relative">
        <NavBar></NavBar>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>

    </div>
  );
}

export default App;
