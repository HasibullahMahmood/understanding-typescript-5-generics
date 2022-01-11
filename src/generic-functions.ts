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

// another generic function example
type Lengthy = { length: number };
const countAndDescribe = <T extends Lengthy>(element: T) => {
	let description = 'Got no value.';
	if (element.length > 0) {
		description = `Got ${element.length} value`;
	}
	return [element, description];
};

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe([1, 2]));
console.log(countAndDescribe(''));

// keyof constraint
const extractAndConvert = <T, U extends keyof T>(element: T, key: U) => {
	return 'Value ' + element[key];
};

console.log(extractAndConvert({ name: 'Hasibullah' }, 'name'));
