import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import MyRoutes from "./routes/MyRoutes";
import ShapeGrid from "./components/ShapeGrid";
import AuthRoutes from "./routes/AuthRoutes";
import { MyStore } from "./context/MyContext";
import CartDrawer from "./components/CartDrawer";
import { UserStore } from "./context/UserContext";

const App = () => {
  let { isCartOpen, setIsCartOpen } =
    useContext(MyStore);

  let {isLogged, setIsLogged} = useContext(UserStore)

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 bg-[#181818]">
        <ShapeGrid />
      </div>

      <div className="relative z-10">
        {isLogged ? (
          <>
            <Navbar />
            <MyRoutes />
            <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
          </>
        ) : (
          <AuthRoutes />
        )}
      </div>
    </div>
  );
};

export default App;
