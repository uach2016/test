//All my variables selecting element from the DOM

var box =  document.getElementsByClassName("box")[0];

var p1 = document.querySelectorAll("p")[0]; 
var p2 = document.querySelectorAll("p")[1]; 

var h1 = document.querySelectorAll("h1")[0];



//when hover
box.addEventListener("mouseover", function() {

    p1.style.color = "#e82e22";
    p2.style.color = "#e82e22";
	
}); 

//when leave
box.addEventListener("mouseleave", function() {

    p1.style.color = "#1921ee";
    p2.style.color = "#1921ee";
	
}); 
    

function simulateClick() {
    var event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    var cb = document.getElementById('checkbox'); 
    var cancelled = !cb.dispatchEvent(event);
    if (cancelled) {
      // A handler called preventDefault.
      alert("cancelled");
    } else {
      // None of the handlers called preventDefault.
      alert("not cancelled");
    }
  }


    
