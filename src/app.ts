const names: Array<string> = [];
// names[0].split('');

const promise: Promise<number> = new Promise((resolve) => {
	setTimeout(() => {
		resolve(1000);
	}, 2000);
});

promise.then((value) => {
	value.toFixed(2);
});

// generic function

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
	return Object.assign(objA, objB);
};

const mergedObj = merge({ name: 'Hasibullah' }, { age: 25 });
console.log(mergedObj.name);
