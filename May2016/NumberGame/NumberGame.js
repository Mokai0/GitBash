var Top = prompt('Pick a number for the cieling');

function randomNumber(upper) {
	return Math.floor( Math.random() * upper) + parseInt(Top);
}
var counter = 0;

while (counter < 25) {
	var randNum = randomNumber(parseInt(Top)-1);
	document.write(randNum + ' ');
	counter += 1;
}