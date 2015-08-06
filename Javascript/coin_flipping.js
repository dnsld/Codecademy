var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");


// while the coin came up heads (when coinFace equalled 0), 
// it would flip again, and it would stop flipping once it got tails 
//(when coinFace was 1). Since the flip was random, we didn't know ahead of time how many loops we'd need.
/// git test