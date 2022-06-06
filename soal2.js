const nama = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

const getIndex = (keyWords) => {
	const keys = [];
	nama.filter((e, i) => {
		if (e.toLowerCase().includes(keyWords.toLowerCase())) keys.push(i);
	});
	return keys;
};

const searchName = (keyWords, limit, callback) => {
	const validation = typeof keyWords === 'string' && typeof limit === 'number';

	if (validation) {
		const getNama = callback(keyWords).map((e) => nama[e]);
		console.log(getNama.slice(0, limit));
	} else {
		console.log(`Keyword harus string`);
	}
};

searchName('an', 3, getIndex);
