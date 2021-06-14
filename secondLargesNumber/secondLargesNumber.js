function secondLargesNumber(numbers) {
	let first = numbers[0]
	let second = 0
	console.log(first, second)
	for (let  i = 0; i < numbers.length; i++) {
		if (numbers[i] > first) {
			second = first
			first = numbers[i]
			console.log(numbers, second,first)
		}
		if (numbers[i] > second && numbers[i] < first) {
			second = numbers[i]
			console.log(numbers, second,first)
		}
	}

	return second
	
}

let nums = [8, 4, 6, 10, 9, 11]
console.log(secondLargesNumber(nums))