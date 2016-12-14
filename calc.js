function work(a, b, opperator) {
	switch(opperator){
		case '+':
			return a + b;
		case '-':
			return a - b
		case '*':
			return a * b;
		case '/':
			return a / b;
	}
}

function zero() {
	if(arguments.length === 0 ) return 0;
	else return work(0, arguments[0][1], arguments[0][0]);
}
function one()  {
	if(arguments.length === 0 ) return 1;
	else return work(1, arguments[0][1], arguments[0][0]);
}
function two()  {
	if(arguments.length === 0 ) return 2;
	else return work(2, arguments[0][1], arguments[0][0]);
}
function three()  {
	if(arguments.length === 0 ) return 3;
	else return work(3, arguments[0][1], arguments[0][0]);
}
function four()  {
	if(arguments.length === 0 ) return 4;
	else return work(4, arguments[0][1], arguments[0][0]);
}
function five()  {
	if(arguments.length === 0 ) return 5;
	else return work(5, arguments[0][1], arguments[0][0]);
}
function six()  {
	if(arguments.length === 0 ) return 6;
	else return work(6, arguments[0][1], arguments[0][0]);
}
function seven()  {
	if(arguments.length === 0 ) return 7;
	else return work(7, arguments[0][1], arguments[0][0]);
}
function eight()  {
	if(arguments.length === 0 ) return 8;
	else return work(8, arguments[0][1], arguments[0][0]);
}
function nine()  {
	if(arguments.length === 0 ) return 9;
	else return work(9, arguments[0][1], arguments[0][0]);
}

function plus()  {
	return ['+', arguments[0]];
}
function minus()  {
	return ['-', arguments[0]];
}
function times()  {
	return ['*', arguments[0]];
}
function dividedBy()  {
	return ['/', arguments[0]];
}

console.log(seven(times(five())) === 35);
console.log(four(plus(nine())) === 13);
console.log(eight(minus(three())) === 5);
console.log(six(dividedBy(two())) === 3);