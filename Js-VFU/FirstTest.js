//sum 3 numbers
function sumNumbers(a, b, c){
	let sum = a+b+c;
	console.log(sum);
}
//sumNumbers(1,2,3);

//VAT
function calculateSumVAT(input){
	let sum = 0;
	for(let num of input){
		sum+=num;
	}
	let vat = sum * 20 /100;
	console.log(`sum = ${sum}`);
	console.log(`VAT = ${vat}`);
	console.log(`total =  ${sum+vat}`);
}
//calculateSumVAT([1.20,2.60,3.50]);

//3.	Letter Occurrences in String
function letterOccurrences(string, letter ){
	let counter = 0;
	for(let i=0; i< string.length; i++){
		if(string[i] === letter){
			counter++;
		}
	}
	console.log(counter);
}
//letterOccurrences('hello', 'l');

//4.	Filter By Age
function filterByAge(age, name1, age1, name2, age2){
	if(age<=age1){
		console.log({name: name1, age: age1})
	}
	if(age<=age2){
		console.log({name: name2, age: age2})
	}
}
//filterByAge(12,'Pesho', 13, 'Gosho', 11);

//5.	String of Numbers 1…N

function stringOfNums(num){
	let result = '';
	for(let i=1; i<= num; i++){
		result+=i;
	}
	console.log(result);
}
//stringOfNums(11);

//6.
function getArea(w, h, W, H)
{
	console.log(w*h + W*H - (Math.min(w,W)*Math.min(h,H)));
}

//getArea(2, 4, 5, 3);


//7. Get next day
function calcNextDay(year, month, day)  {
	let date = new Date(year, month-1, day);
	let oneDay = 24 * 60 * 60 * 1000; // milliseconds in 1 day
	let nextDate = new Date(date.getTime() + oneDay);
	return nextDate.getFullYear() + "-" +
		(nextDate.getMonth() + 1) + '-' +
		nextDate.getDate();
}

console.log(calcNextDay(2017,5, 31));