import { useState } from "react";
import SeleccionarParcelas from "./components/SeleccionarParcelas";
function App() {
  return (
    <>
      <h1 className="text-center text-4xl text-gray-400 font-bold my-4">
        Farms<span className="text-green-300">Fetch &copy;</span>
      </h1>
      <SeleccionarParcelas />
    </>
  );
}

export default App;
