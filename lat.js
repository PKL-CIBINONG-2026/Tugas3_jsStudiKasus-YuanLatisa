const keranjang = [
    { id: 1, nama: "Buku", harga:20000, stok:2 },
    { id: 2, nama: "Pulpen", harga: 5000, stok: 0 },
    { id: 3, nama: "Penggaris", harga: 10000, stok: 4},
];

//map() >>> mau menaikkan harga semua barang sebesar 2k (tanpa mengubah keranjang).
const hargaNaik = keranjang.map((item) => ({
    ...item,
    harga: item.harga + 2000,
}));

//fillter() >>> mau ambil barang yg stok nya lebih dari 0.
const tersedia = keranjang.filter((item) => item.stok > 0);

//find() >>> mau mencari barang
const barang = keranjang.find((item) => item.id === 2);

//some() >>> mau cek apakah ada barang yang habis.
const stokHabis = keranjang.some((item) => item.stok === 0);

//reduce() >>> mau menghitung jumlah total harga semua barang.
const totalHarga = keranjang.reduce((total, item) => {
    return total + item.stok;
}, 0);


// console.log(hargaNaik);
// console.log(tersedia);
// console.log(barang);
// console.log(stokHabis);
// console.log(totalHarga);



const menu = {
    nasiGoreng: 15000,
    esTeh: 5000,
    ayamBakar: 22000,
};

//Object.values(obj) — Ambil Isinya (Value) Saja
//Object.values() mengambil semua nilai di dalam object dan menaruhnya ke dalam sebuah array. 
//nama kuncinya(key) sepersi nasiGoreng, esTeh tidak ikut dibawa.
const daftarHarga = Object.values(menu);
console.log(daftarHarga);

//karena hasilnya sudah berupa array, skrg bisa langsung pakai .reduce() buat ngitung total harganya
const totalMenu = Object.values(menu).reduce((toples, harga) => {
    return toples + harga;
}, 0);
console.log(totalMenu);
//ket: dipakai saat kamu cuma peduli pada angkanya/nilainya dan gak butuh nama label/kuncinya.

//Object.entries(obj) — Ambil Pasangan [Key, Value]
//Kalau kamu butuh nama label/kuncinya juga selain nilainya, pakai Object.entries(). 
//Hasilnya berupa array yang di dalamnya berisi array-array kecil [key, value].
const pasanganMenu = Object.entries(menu);
console.log(pasanganMenu);

//Di sini array destructuring jadi kepakai

const daftarTeks = Object.entries(menu).map(([namaItem, harga]) => {
    return `${namaItem} harganya Rp${harga}`;
})
console.log(daftarTeks);