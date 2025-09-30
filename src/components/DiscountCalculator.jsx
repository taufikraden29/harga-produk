import { useState } from "react";

export default function DiscountCalculator() {
  const [harga, setHarga] = useState("");
  const [diskon, setDiskon] = useState("");
  const [hasil, setHasil] = useState(null);

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  const hitungDiskon = () => {
    if (!harga || !diskon) return;
    const potongan = (parseFloat(harga) * parseFloat(diskon)) / 100;
    const total = parseFloat(harga) - potongan;
    setHasil(total);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-lg md:text-xl font-bold text-blue-600 mb-6 text-center md:text-left">
        Kalkulator Diskon
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="Harga Barang"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
        />
        <input
          type="number"
          placeholder="Diskon (%)"
          value={diskon}
          onChange={(e) => setDiskon(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
        />

        <button
          onClick={hitungDiskon}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm md:text-base"
        >
          Hitung
        </button>
      </div>

      {hasil !== null && (
        <div className="mt-6 bg-blue-50 p-4 rounded-lg text-center md:text-left">
          <p className="text-green-600 font-bold text-lg">
            Harga Setelah Diskon: {formatRupiah(hasil)}
          </p>
        </div>
      )}
    </div>
  );
}
