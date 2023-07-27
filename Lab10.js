window.onload = initAll;

function initAll() {
	if (document.getElementById) {
		document.getElementById("pick").onclick = displayNumber;
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

function displayNumber() {
	var number=generateNumber();
	document.getElementById("number").innerHTML="The next Bingo Number is: "+number[0]+" - "+number[1];


}

function generateNumber() {
	var columnLabel=new Array("B","I","N","G","O");
	var ColumnIndex=Math.floor(Math.random()*5);
	var newNum=Math.floor(Math.random()*15)+1+(ColumnIndex*15);

	return new Array(columnLabel[ColumnIndex],newNum);
}
