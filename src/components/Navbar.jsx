import { NavLink } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "@/context/MyContext";

const Navbar = () => {

    let { isLogged, setIsLogged} = useContext(MyStore)

  return (
    <div className="p-5 w-[80%] m-auto text-l">
      <nav className="flex p-4 border border-white/20 bg-white/2 px-4 py-7 text-center backdrop-blur-sm text-[#C6FF00] rounded-xl items-center justify-between">
      <div>
        <h1 className="text-white text-3xl font-bold">Krazy<span className="text-[#C6FF00]">Kart</span></h1>
      </div>
        <div className="flex gap-10">
          <NavLink className="hover:text-white cursor-pointer" to="/">
            Home
          </NavLink>
          <NavLink className="hover:text-white cursor-pointer" to="/shop">
            Shop
          </NavLink>
          <NavLink className="hover:text-white cursor-pointer" to="/about">
            About
          </NavLink>
        </div>
        <div className="flex items-center justify-between gap-10">
          <p></p>
          <button className="hover:text-white">
          <NavLink className="hover:text-white cursor-pointer" to="/cart">
            <ShoppingCart size={26} />
          </NavLink>
          </button>
          <button onClick={() => isLogged((prev) => !prev) } className="hover:text-white">Login</button>
        </div>
      </nav>
      <div></div>
    </div>
  );
};

export default Navbar;
