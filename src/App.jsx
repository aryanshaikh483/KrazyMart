import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import MyRoutes from "./routes/MyRoutes";
import ShapeGrid from "./components/ShapeGrid";
import AuthRoutes from "./routes/AuthRoutes";
import { MyStore } from "./context/MyContext";

const App = () => {

  let { isLogged, setIsLogged} = useContext(MyStore)

  return (
    <div className="relative min-h-screen">
          <div className="fixed inset-0 z-0 bg-[#181818]">
            <ShapeGrid />
          </div>
      {isLogged ? (
        <div>
          <div className="relative z-10">
            <Navbar isLogged={isLogged} />
            <MyRoutes />
          </div>
        </div>
      ) : (
       <AuthRoutes />
      )}
    </div>
  );
};

export default App;