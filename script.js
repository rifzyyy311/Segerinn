const NOMOR_WHATSAPP_PENJUAL = "6281374747149";

const HARGA_VARIAN = {
  "Asinan Buah Segerin": 12000,
  "Bengkuang Segar": 12000,
  "Timun Segar": 12000,
  "Nanas Segar": 12000,
  "Mangga Segar": 12000
};

document.getElementById("tahun").textContent = new Date().getFullYear();

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function pilihMenu() {
  document.getElementById("pesan").scrollIntoView({ behavior: "smooth" });
}

function perbaruiHarga() {
  const pilihan = document.getElementById("menuPilihan").value;
  const jumlah = Number(document.getElementById("jumlah").value) || 1;
  const hargaSatuan = HARGA_VARIAN[pilihan];
  const total = hargaSatuan * jumlah;

  document.getElementById("hargaPilihan").textContent = formatRupiah(hargaSatuan);
  document.getElementById("totalHarga").textContent = formatRupiah(total);
}

function kirimPesanan(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const menu = document.getElementById("menuPilihan").value;
  const jumlah = Number(document.getElementById("jumlah").value);
  const catatan = document.getElementById("catatan").value.trim();
  const hargaSatuan = HARGA_VARIAN[menu];
  const total = hargaSatuan * jumlah;

  const pesan =
    "Halo Seger.In, saya mau pesan:\n" +
    "Nama: " + nama + "\n" +
    "Varian: " + menu + "\n" +
    "Harga per porsi: " + formatRupiah(hargaSatuan) + "\n" +
    "Jumlah: " + jumlah + " porsi\n" +
    "Total perkiraan: " + formatRupiah(total) + "\n" +
    "Catatan: " + (catatan || "-");

  const linkWhatsApp =
    "https://wa.me/" + NOMOR_WHATSAPP_PENJUAL +
    "?text=" + encodeURIComponent(pesan);

  window.open(linkWhatsApp, "_blank");
}

perbaruiHarga();
