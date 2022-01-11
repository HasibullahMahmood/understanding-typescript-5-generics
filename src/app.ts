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

// 'Partial' utility types
interface CourseGoal {
	title: string;
	description: string;
	untilDate: Date;
}

const createCourseGoal = (title: string, description: string, untilDate: Date): CourseGoal => {
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.untilDate = untilDate;
	return courseGoal as CourseGoal;
};

// 'Readonly' utility type
const ourNames: Readonly<string>[] = ['Hasibullah', 'Safiullah'];
// ourNames.push('Rahmatullah');
