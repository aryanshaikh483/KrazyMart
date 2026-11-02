import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { MyContext } from "./context/MyContext";
import { UserContext } from "./context/UserContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyContext>
      <UserContext>
        <App />
      </UserContext>
    </MyContext>
  </BrowserRouter>,
);
