 var x=Math.floor(Math.random() * 100) + 1;
 var y=x%2
 if(y===0){
 	alert("number is even")
 }else{
 		alert("number is odd")
 }
for(r=1;r<=10;r++){
	  let z=prompt("Please input a number");
	if(z>x){
		alert("number is higher,make another guess");
	}else if(z<x){
		alert("number is lower,make another guess");
	}else if(z===x){
		alert("you win")
	}else{
	  alert("you lose")
	}
	
}