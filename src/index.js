import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import MenuProvider from "./context/MenuContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <AuthProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </AuthProvider>
  </ChakraProvider>
);
