//Remember to set your condition outside the loop!

var loop = function(){
	var count = 0;
	while(count < 3){
		console.log("I'm looping!");
		count++;
	}
};

loop();



//Remember to make your condition true outside the loop!

var soloLoop = function(){
  var darkSide = true;
  while (darkSide = true){
  	console.log("Looped once!");
  	darkSide = false;
  }
  
};

soloLoop();