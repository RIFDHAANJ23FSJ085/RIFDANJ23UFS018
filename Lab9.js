window.onload = initAll;

function initAll() {
    var ans=prompt("Are You Sure You Want to do That?","");
    if(ans){
        alert("You said "+ans);
        document.write("You Said "+ans);
    }
    else{
        alert("You Refused The Answer");
    }

}