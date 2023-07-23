window.onload = initAll;

function initAll() {
	var now = new Date();
	if(now.toLocaleDateString){
		var date=now.toLocaleDateString();
		var time=now.toLocaleTimeString();
		alert("It is: " +time+"on"+date);
		if(document.getElementById){
			document.getElementById("dateString").innerHTML="It is: "+time+" on "+date;
	}else{
		document.write("It is: "+time+"on"+date);
	}
	
	}}
