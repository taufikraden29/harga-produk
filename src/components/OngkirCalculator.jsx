import { useState } from "react";

export default function OngkirCalculator() {
  const [harga, setHarga] = useState("");
  const [berat, setBerat] = useState("");
  const [tarif, setTarif] = useState("");
  const [ongkir, setOngkir] = useState(null);
  const [total, setTotal] = useState(null);

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  const handleHargaChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    setHarga(raw);
  };

  const hitungOngkir = () => {
    if (!harga || !berat || !tarif) return;
    const biayaOngkir = parseFloat(berat) * parseFloat(tarif);
    const totalBayar = parseFloat(harga) + biayaOngkir;
    setOngkir(biayaOngkir);
    setTotal(totalBayar);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-lg md:text-xl font-bold text-blue-600 mb-6 text-center md:text-left">
        Kalkulator Ongkir
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Harga Barang"
          value={harga ? formatRupiah(harga) : ""}
          onChange={handleHargaChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
        />
        <input
          type="number"
          placeholder="Berat Barang (kg)"
          value={berat}
          onChange={(e) => setBerat(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
        />
        <input
          type="number"
          placeholder="Tarif Ongkir per kg"
          value={tarif}
          onChange={(e) => setTarif(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
        />

        <button
          onClick={hitungOngkir}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm md:text-base"
        >
          Hitung
        </button>
      </div>

      {total !== null && (
        <div className="mt-6 bg-blue-50 p-4 rounded-lg text-center md:text-left">
          <p>
            Biaya Ongkir: <b>{formatRupiah(ongkir)}</b>
          </p>
          <p className="text-green-600 font-bold text-lg">
            Total Bayar: {formatRupiah(total)}
          </p>
        </div>
      )}
    </div>
  );
}
