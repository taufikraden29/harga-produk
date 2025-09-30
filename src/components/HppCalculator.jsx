import { useState } from "react";

export default function HppCalculator() {
  const [modal, setModal] = useState("");
  const [biaya, setBiaya] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [hpp, setHpp] = useState(null);

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  const hitungHpp = () => {
    if (!modal || !biaya || !jumlah) return;
    const total = parseFloat(modal) + parseFloat(biaya);
    const hppPerUnit = total / parseFloat(jumlah);
    setHpp(hppPerUnit);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-lg md:text-xl font-bold text-blue-600 mb-6 text-center md:text-left">
        Kalkulator HPP
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="Modal Produksi"
          value={modal}
          onChange={(e) => setModal(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
        />
        <input
          type="number"
          placeholder="Biaya Tambahan"
          value={biaya}
          onChange={(e) => setBiaya(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
        />
        <input
          type="number"
          placeholder="Jumlah Produksi"
          value={jumlah}
          onChange={(e) => setJumlah(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
        />

        <button
          onClick={hitungHpp}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm md:text-base"
        >
          Hitung
        </button>
      </div>

      {hpp !== null && (
        <div className="mt-6 bg-blue-50 p-4 rounded-lg text-center md:text-left">
          <p className="text-green-600 font-bold text-lg">
            HPP per Unit: {formatRupiah(hpp)}
          </p>
        </div>
      )}
    </div>
  );
}
