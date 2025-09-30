import { useState } from "react";
import OngkirCalculator from "./components/OngkirCalculator";
import HppCalculator from "./components/HppCalculator";
import DiscountCalculator from "./components/DiscountCalculator";

function App() {
  const [menu, setMenu] = useState("ongkir");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar / Navbar */}
      <aside className="w-full md:w-64 bg-white shadow-md p-4 md:p-6 flex md:flex-col gap-2 md:gap-4 sticky top-0 z-10">
        <h1 className="text-xl md:text-2xl font-bold text-blue-600 mb-2 md:mb-6">
          Kalkulator Bisnis
        </h1>
        <nav className="flex md:flex-col gap-2 w-full">
          <button
            onClick={() => setMenu("ongkir")}
            className={`flex-1 text-center md:text-left px-4 py-2 rounded-lg ${
              menu === "ongkir" ? "bg-blue-600 text-white" : "hover:bg-blue-100"
            }`}
          >
            Hitung Ongkir
          </button>
          <button
            onClick={() => setMenu("hpp")}
            className={`flex-1 text-center md:text-left px-4 py-2 rounded-lg ${
              menu === "hpp" ? "bg-blue-600 text-white" : "hover:bg-blue-100"
            }`}
          >
            Hitung HPP
          </button>
          <button
            onClick={() => setMenu("diskon")}
            className={`flex-1 text-center md:text-left px-4 py-2 rounded-lg ${
              menu === "diskon" ? "bg-blue-600 text-white" : "hover:bg-blue-100"
            }`}
          >
            Hitung Diskon
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 md:p-8 flex justify-center items-start">
        {menu === "ongkir" && <OngkirCalculator />}
        {menu === "hpp" && <HppCalculator />}
        {menu === "diskon" && <DiscountCalculator />}
      </main>
    </div>
  );
}

export default App;
