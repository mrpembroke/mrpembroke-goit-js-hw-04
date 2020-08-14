console.log('--- Task 2 ---');

const countProps = function(obj) {
	// Write code under this line
	return Object.keys(obj).length;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

/* 

Напиши функцию countProps(obj),
которая возвращает число - количество свойств в объекте.

Циклы не должны использоваться

*/
