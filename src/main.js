function init()
{
	showInput('button', 3);
}

function sumAll(a, b)
{
	return (a + b) * ( b - a + 1) / 2;
}

function special(a, b)
{
	var	pow = Math.pow(a,2) + Math.pow(b,2);
	var sum = sumAll(a, b);
	var result = Math.sqrt(pow/2)+ sum;
	return result;
}

function onSubmitA()
{
	var inputA = Number(prompt("input a"));
	var inputB  = Number(prompt("input b"));
	echo(sumAll(inputA, inputB));
}

function onSubmitB()
{
	var inputA = Number(prompt("input a"));
	var inputB  = Number(prompt("input b"));
	echo(sumAll(inputA, inputB) + sumAll(inputA, inputB/2 ));

}

function onSubmitC()
{
	var inputA = Number(prompt("input a"));
	var inputB  = Number(prompt("input b"));
	echo(special(inputA, inputB));
	
}