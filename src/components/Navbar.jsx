import { NavLink, useNavigate } from "react-router";
import { LogOutIcon, ShoppingCart, UserStar } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "@/context/MyContext";
import { UserStore } from "@/context/UserContext";

const Navbar = () => {
  let { setIsCartOpen } = useContext(MyStore);

  let { session, isLogged, setIsLogged } = useContext(UserStore);

  let navigate = useNavigate();

  return (
    <div className="p-5 w-[88%] m-auto text-l">
      <nav className="flex p-4 border border-white/20 bg-white/2 px-8 py-5 text-center backdrop-blur-sm text-[#C6FF00] rounded-xl items-center justify-between">
        <div>
          <h1 className="text-white text-3xl font-bold">
            Krazy<span className="text-[#C6FF00]">Kart</span>
          </h1>
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
          <button
            onClick={() => setIsCartOpen(true)}
            className="hover:text-white"
          >
            <ShoppingCart size={26} />
          </button>

          {isLogged && session &&( 
                <div
                  key={session.id}
                  className="flex items-center justify-center gap-5 border text-xl border-white/20 rounded-xl p-2.5"
                >
                  <span className="font-bold text-[#202020] border border-white/20 px-1.5 rounded bg-[#C6FF00]">
                    {session.avatar}
                  </span>
                  <span className="text-white">{session.name}</span>
                </div>
            )}

          {!isLogged ? (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="hover:text-white"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLogged(false);
                navigate("/login");
              }}
              className="hover:text-white"
            >
              <LogOutIcon />
            </button>
          )}
        </div>
      </nav>
      <div></div>
    </div>
  );
};

export default Navbar;
