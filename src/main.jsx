import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Dashbordstore from "./Redux/Store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={Dashbordstore}>
    <App />
  </Provider>
);
