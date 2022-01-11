class DataStorage<T extends string | number | boolean> {
	data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) !== -1) {
			this.data.splice(this.data.indexOf(item), 1);
		}
	}

	getData() {
		return [...this.data];
	}
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem('Hasibullah');
stringStorage.addItem('Safiullah');
stringStorage.removeItem('Hasibullah');

console.log(stringStorage.getData());
