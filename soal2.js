const nama = [
	'Abigail',
	'Alexandra',
	'Alison',
	'Amanda',
	'Angela',
	'Bella',
	'Carol',
	'Caroline',
	'Carolyn',
	'Deirdre',
	'Diana',
	'Elizabeth',
	'Ella',
	'Faith',
	'Olivia',
	'Penelope',
];

const getIndex = (keyWords) => {
	const keys = [];
	const lower = nama
		.map((element) => element.toLowerCase())
		.filter((element, i) => {
			if (element.includes(keyWords.toLowerCase())) keys.push(i);
		});
	return keys;
};

const searchName = (keyWords, amount, callback) => {
	const hasil = [];

	if (typeof keyWords === 'string') {
		const index = callback(keyWords);

		for (let i = 0; i < amount; i++) {
			if (nama[index[i]] !== undefined) hasil.push(nama[index[i]]);
		}
		console.log(hasil);
		if (amount > index.length)
			console.log(`Hasil yang ditemukan hanya ${index.length} nama saja!`);
	} else {
		console.log(`Keyword harus string`);
	}
};

searchName('an', 5, getIndex);
