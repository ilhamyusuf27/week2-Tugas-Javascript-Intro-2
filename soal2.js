const nama = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

const getIndex = (keyWords) => {
	const keys = [];
	nama.filter((e, i) => {
		if (e.toLowerCase().includes(keyWords.toLowerCase())) keys.push(i);
	});
	return keys;
};

const searchName = (keyWords, limit, callback) => {
	if (typeof keyWords === 'string') {
		const temp = [];
		const getIndex = callback(keyWords);

		for (let i = 0; i < limit; i++) {
			if (nama[getIndex[i]] !== undefined) temp.push(nama[getIndex[i]]);
		}

		if (limit > getIndex.length) {
			console.log(temp);
			console.log(`Hasil yang ditemukan hanya ${getIndex.length} nama saja!`);
		} else {
			console.log(temp);
		}
	} else {
		console.log(`Keyword harus string`);
	}
};

searchName('an', 3, getIndex);
