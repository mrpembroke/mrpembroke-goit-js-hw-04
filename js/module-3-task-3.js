console.log('--- Task 3 ---');

// const bestEmployee = '';

const findBestEmployee = function(employees) {
	// Write code under this line
	// Object.values(employees);
	let maxRating = 0;
	let bestEmployee = '';
	const entries = Object.entries(employees);

	for (const [ name, rating ] of entries) {
		// console.log(rating);
		if ([ rating ] > maxRating) {
			maxRating = rating;
			bestEmployee = name;
		}
	}

	return bestEmployee;
};

// const findBestEmployee = function(employees) {
// 	// Write code under this line
// 	// Object.values(employees);
// 	let maxRating = 0;
// 	let bestEmployee = '';
// 	const keys = Object.keys(employees);

// 	for (const key of keys) {
// 		// console.log(rating);
// 		if (employees[key] > maxRating) {
// 			maxRating = employees[key];
// 			bestEmployee = key;
// 		}
// 	}

// 	return bestEmployee;
// };

// const findBestEmployee = function (employees) {
// 	// Write code under this line
// 	// Object.values(employees);
// 	const employeesValue = Object.values(employees);
// 	const higherValue = Math.max(...employeesValue);

// Объекты и ожидаемый результат

const developers = {
	ann: 29,
	david: 35,
	helen: 1,
	lorence: 99
};
console.log(findBestEmployee(developers));
// ('lorence');

const supports = {
	poly: 12,
	mango: 17,
	ajax: 4
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
	lux: 147,
	david: 21,
	kiwi: 19,
	chelsy: 38
};
console.log(findBestEmployee(sellers));
// 'lux'

/* 

Задача 3-3
Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и
возвращает имя самого продуктивного (который выполнил больше всех задач).
Сотрудники и кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач".

*/
