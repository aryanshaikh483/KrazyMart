import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { MyContext } from "./context/MyContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyContext>
      <App />
    </MyContext>
  </BrowserRouter>,
);
