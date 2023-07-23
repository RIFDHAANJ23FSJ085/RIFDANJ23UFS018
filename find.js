window.onload = initAll;

function initAll() {
	document.getElementById("findById").onclick=findById;
	
}

function findById() {

var id=document.getElementById("id_value").value;
var e=document.getElementById(id);

if(e != null){
    e.style.backgroundColor="Yellow";
}else{
    alert("Could not find element by Id: "+id);
}

}

