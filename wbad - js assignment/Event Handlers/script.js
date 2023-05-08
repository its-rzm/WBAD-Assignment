// keyboard event
function keyFunction(event){
    var x = event.key; 
    document.getElementById("typekey").innerHTML = "key pressed: " + x;
}

// mouse event
document.getElementById("button").addEventListener("click", function(){alert("clicked")});

// form event
document.getElementById("formevent").addEventListener("focus", function(){document.getElementById("formevent").style.backgroundColor="aqua"});

// object event
document.getElementById("mse").addEventListener("load", function(){let x = document.getElementById("mse").value; document.getElementById("output").innerHTML = "selected: " + x});