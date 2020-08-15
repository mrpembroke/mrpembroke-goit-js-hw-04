const isUniq = (element, index, arr) => arr.indexOf(element) === index;
const isEven = (element) => element % 2 === 0;

function filterArray(array, cb) {
	const numbers = [];
	for (let i = 0; i < array.length; i += 1) {
		const element = array[i];
		const index = i;
		// Write code under this line
		if (cb(element, index, array)) {
			numbers.push(element);
		}
	}
	return numbers;
}

const arr = [ 1, 2, 3, 4, 5, 1, 2, 5 ];

console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven));
// [2, 4, 2]

/* 
Задача 4-3
Callback функция для получения одного вычисляемого значения массива
Функции add, sub и mult принимают два параметра - accum и element ,
возвращает число - сумму, разность или произведение параметров.

Дополни тело функции reduceArray строкой присвоения accum вызова функции cb.
Функция reduceArray должна будет подсчитать сумму или разность или произведение всех элементов массива
в зависимости от того какая именно из трех функция (add, mult, sub) будет передана в качестве cb.
*/
