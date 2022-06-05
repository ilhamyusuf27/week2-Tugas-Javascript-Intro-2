const nama = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

const getIndex = (keyWords) => {
	const keys = [];
	const toLower = nama.map((e) => e.toLowerCase());
	toLower.filter((e, i) => {
		if (e.includes(keyWords.toLowerCase())) keys.push(i);
	});
	return keys;
};

const searchName = (keyWords, amount, callback) => {
	if (typeof keyWords === 'string') {
		const temp = [];
		const getIndex = callback(keyWords);

		for (let i = 0; i < amount; i++) {
			if (nama[getIndex[i]] !== undefined) temp.push(nama[getIndex[i]]);
		}

		if (amount > getIndex.length) {
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
