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
// const number = [1, 2, 3, 4, 5, 6, 7, 8];
// number.push(9);
// console.log(number);

// 5. pop()
// Fungsi ini digunakan untuk menghapus array di index terakhir
// const number = [1, 2, 3, 4, 5, 6, 7, 8];
// const hapungAngkaPalingBelakang = number.pop();
// console.log(number);

// 6. toLowerCase()
// Fungsi ini digunakan untuk menkonversi string dimana jika ada huruf kapital akan di konversi ke huruf kecil
// const fullName = 'Ilham Yusuf Alghani';
// const convertToLower = fullName.toLowerCase();
// console.log(convertToLower);

// 7. sort()
// Fungsi ini digunakan untuk mengurutkan dari nilai kecil ke besar. Cara kerja fungsi ini yaitu mengubah nilai ke string dan membandingkan urutan nilai utf-16
// const angka = [5, 1, 4, 6, 7, 9, 2, 10, 3, 8];
// const urutkan = angka.sort((a, b) => a - b);
// console.log(urutkan);

// 8. find()
// Fungsi ini akan menampilkan elemen pertama yang memenuhi fungsi pengujian yang disediakan
// const angka = [5, 1, 4, 6, 7, 9, 2, 10, 3, 8];
// const cari = angka.find((element) => element > 5);
// console.log(cari);

// 9. filter()
// Fungsi ini digunakan untuk menampung element ke array baru dimana element tersebut berhasil diuji dengan fungsi yang disediakan
// const angka = [5, 1, 4, 6, 7, 9, 2, 10, 3, 8];
// const filter = angka.filter((element) => element > 5);
// console.log(filter);

// 10. include()
// Fungsi ini digunakan untuk menentukan apakah value array memiliki nilai yang sama dengan entrynya. Fungsi ini mengembalikan nila true atau false
const nama = ['Abigail', 'Alexandra', 'Alison', 'Amanda'];
const include = nama.includes('Abigail');
console.log(include);
