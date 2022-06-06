const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
	if (typeof nilaiAwal === 'number' && typeof nilaiAkhir === 'number' && Array.isArray(dataArray) === true) {
		if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
			const number = [];
			for (let i = 0; i < dataArray.length; i++) {
				if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
					if (typeof dataArray[i] === 'number') number.push(dataArray[i]);
				}
			}
			if (number.length === 0) {
				console.log('nilai tidak ditemukan');
			} else {
				console.log(number.sort((a, b) => a - b));
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
