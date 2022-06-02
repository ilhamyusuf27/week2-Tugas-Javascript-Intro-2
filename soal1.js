// 1. trim();
// Fungsi ini digunakan untuk menghapus whitespace (spasi) yang ada pada awal dan akhir sebuah string, dan akan mengembalikan string baru.
// const greeting = '   Hello World     ';
// console.log(greeting.trim());

// 2. Math.random();
// Fungsi ini digunakan untuk mendapatkan nilai random, dimana angka yang dikembalikan berupa angka desimal antara 0 hingga 1
// const numRandom = Math.random();
// console.log(numRandom);

// 3. Math.floor();
// Fungsi ini mengembalikan nilai menjadi bilangan bulat ke bawah
// const desimal = Math.random() * 10;
// const pembulatan = Math.floor(desimal);
// console.log(desimal, pembulatan);

// 4. push()
// Fungsi ini digunakan untuk menginputkan element baru kedalam array
// const nama = [
// 	'Abigail',
// 	'Alexandra',
// 	'Alison',
// 	'Amanda',
// 	'Angela',
// 	'Bella',
// 	'Carol',
// 	'Caroline',
// 	'Carolyn',
// 	'Deirdre',
// 	'Diana',
// 	'Elizabeth',
// 	'Ella',
// 	'Faith',
// 	'Olivia',
// 	'Penelope',
// ];
// const tambahNama = nama.push('Ilham');
// console.log(nama);

// 5. pop()
// Fungsi ini digunakan untuk menghapus array di index terakhir
// const hapusNamaPalingBelakang = nama.pop();
// console.log(nama);

// 6. toLowerCase()
// Fungsi ini digunakan untuk menkonversi string dimana jika ada huruf kapital akan di konversi ke huruf kecil
// const fullName = 'Ilham Yusuf Alghani';
// const convertToLower = fullName.toLowerCase();
// console.log(convertToLower);

// 7. sort()
// Fungsi ini digunakan untuk mengurutkan berdasarkan karakter dalam array, dan akan mereturn sebuah array yang telah di urutkan.
// const angka = [5, 1, 4, 6, 7, 9, 2, 10, 3, 8];
// const urutkan = angka.sort((a, b) => a - b);
// console.log(urutkan);

// 8. find()
// Fungsi ini akan menampilkan elemen pertama yang memenuhi fungsi pengujian yang disediakan
// const cari = angka.find((element) => element > 5);
// console.log(cari);

// 9. filter()
// Fungsi ini digunakan untuk menampung element ke array baru dimana element tersebut berhasil diuji dengan fungsi yang disediakan
// const filter = angka.filter((element) => element > 5);
// console.log(filter);

// 10. include()
// Fungsi ini digunakan untuk menentukan apakah value array memiliki nilai yang sama dengan entrynya. Fungsi ini mengembalikan nila true atau false
const include = nama.includes('Olivia');
console.log(include);

// console.log(nama.includes('Abigail'));
