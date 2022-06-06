const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
	const validation = typeof nilaiAwal === 'number' && typeof nilaiAkhir === 'number' && Array.isArray(dataArray) === true;

	if (validation) {
		if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
			const nilai = dataArray.filter((e) => e > nilaiAwal && e < nilaiAkhir && typeof e === 'number');
			if (nilai.length === 0) {
				console.log('Nilai tidak ditemukan');
			} else {
				console.log(nilai.sort((a, b) => a - b));
			}
		} else if (nilaiAwal > nilaiAkhir) {
			console.log('Nilai akhir harus lebih besar dari nilai awal');
		} else if (dataArray.length <= 5) {
			console.log('Jumlah angka dalam dataArray harus lebih dari 5');
		} else {
			console.log(`nilaiAwal harus lebih kecil dari nilaiAkhir dan dataArray harus lebih dari 5`);
		}
	} else {
		console.log('Tipe data nilaiAwal, nilaiAkhir harus number, parameter dataArray harus array!');
	}
};

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(5, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
