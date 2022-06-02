const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
	if (
		typeof nilaiAwal === 'number' &&
		typeof nilaiAkhir === 'number' &&
		Array.isArray(dataArray) === true
	) {
		if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
			const number = [];
			for (let i = 0; i < dataArray.length; i++) {
				if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
					number.push(dataArray[i]);
				}
			}
			if (number.length === 0) console.log('nilai tidak ditemukan');
			console.log(number.sort((a, b) => a - b));
		} else if (nilaiAwal > nilaiAkhir) {
			console.log('Nilai akhir harus lebih besar dari nilai awal');
		} else if (dataArray.length < 5) {
			console.log('Jumlah angka dalam dataArray harus lebih dari 5');
		} else {
			console.log(
				`nilaiAwal harus lebih kecil dari nilaiAkhir dan dataArray harus lebih dari 5`,
			);
		}
	} else {
		console.log(
			'Tipe data nilaiAwal, nilaiAkhir harus number, parameter dataArray harus array!',
		);
	}
};

seleksiNilai(3, 13, [8, 5, 3, 10, 17, 12]);