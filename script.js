 document.getElementById("disp").style.display = "none";

     var counter = 0;

     var avg = 0;

     var high = 20;

     var start = new Date().getTime();

     function getRandomColor() {


     	 var letters = '0123456789ABCDEF'.split('');
     	 var color = '#';

     	 for(var i=0;i<6;i++){

     	 	color += letters[Math.floor(Math.random()*16)];
     	 }

     	 return color;
     }

     function makeShapeAppear(){

     	var width = Math.random()*250 + 50;

     	var rem_height = document.getElementById("borderdiv").offsetHeight;

     	var rem_width = document.getElementById("borderdiv").offsetWidth;

     	var top = Math.random()*rem_height;

     	if(top+width > rem_height)
     	{
     		top -= width;
     	}

     	var left = Math.random()*rem_width;

     	if(left+width > rem_width)
     	{
     		left -= width;
     	}

     	//console.log(top);
     	//console.log(left); 

     	

     	if(Math.random() > 0.5){

     		document.getElementById("shape").style.borderRadius = "50%";

     	}

     	else {

     		document.getElementById("shape").style.borderRadius = "0";
     	}

     	document.getElementById("shape").style.backgroundColor = getRandomColor();

     	document.getElementById("shape").style.top = top + "px";

     	document.getElementById("shape").style.left = left + "px";

     	document.getElementById("shape").style.width = width + "px";

     	document.getElementById("shape").style.height = width + "px";


     	document.getElementById("shape").style.display = "block";

     	start = new Date().getTime();
     }

     function appearAfterDelay(){

     	document.getElementById("disp").style.display = "none";

     if(counter>9)
     {  
     	
     	
     	alert("Game over ..." );

     	
        document.getElementById("disp").style.display = "inline";
     	document.getElementById("avgTime").innerHTML = avg.toFixed(3);
     	document.getElementById("bestTime").innerHTML = high;

     	counter =0;

     	avg =0;

     	high=20;

     	document.getElementById("play").style.display = "inline";

     	document.getElementById("play").innerHTML = "Play Again";






     }

     else {

     setTimeout(makeShapeAppear,Math.random()*2000);

     document.getElementById("disp").style.display = "none";


     }

     }
      
     document.getElementById("play").onclick = function() {
        
        document.getElementById("play").style.display = "none";

        appearAfterDelay();

      }

     document.getElementById("shape").onclick = function(){

     	counter++;

     	document.getElementById("shape").style.display = "none";

     	var end = new Date().getTime();

     	var timeTaken = ( end - start ) / 1000;

     	avg = (avg + timeTaken)/2;

     	if(timeTaken < high){

     		high = timeTaken;

     	}

     	document.getElementById("timeTaken").innerHTML = timeTaken + "s";

     	appearAfterDelay();
     }