let jumlahPesanan = 1;
let hargaPerItem = 12000; // Harga per item dalam Rupiah

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const harga = document.querySelector(".harga");
const currency = document.querySelector(".currency");

plus.addEventListener("click", () => {
  jumlahPesanan++;
  updateNumAndHarga();
});

minus.addEventListener("click", () => {
  if (jumlahPesanan > 1) {
    jumlahPesanan--;
    updateNumAndHarga();
  }
});

function updateNumAndHarga() {
  // Format jumlahPesanan menjadi dua digit angka
  let formattedJumlah =
    jumlahPesanan < 10 ? "0" + jumlahPesanan : jumlahPesanan;

  // Hitung total harga
  let totalHarga = jumlahPesanan * hargaPerItem;

  // Format harga menjadi mata uang Rupiah
  let formattedHarga = totalHarga.toLocaleString("id-ID");

  // Perbarui tampilan jumlah pesanan dan harga
  num.innerText = formattedJumlah;
  harga.innerText = formattedHarga;
}
