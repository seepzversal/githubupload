function getHistory(){
	return document.getElementById("h-value").innerHTML;
}
function printHistory(num){
	document.getElementById("h-value").innerHTML=num;
}
function getOutput(){
	return document.getElementById("o-value").innerHTML;
}
function printOutput(num){
	//if the num is an empty string
	if(num==""){
		document.getElementById("o-value").innerHTML=num;
	}
	else{
		document.getElementById("o-value").innerHTML=fun(num);
	}	
}
//to print the output on the screen with a comman separated value
function fun(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	//number method that is used to convert a number into a locale-specific numeric represtation
	return value;
}
//to do the calculations the comma separeted values to be converted back to normal without commas 
function fun1(num){
	return Number(num.replace(/,/g,''));
}
//dealing with number class
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=fun1(getOutput());
		if(output!=NaN){ //if output is not (not a number) 
			output=output+this.id;
			printOutput(output);
		}
	});
}
//dealing with operators
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=fun1(getOutput()).toString();//convert it into string to use substring method
			if(output){//if output has a value
				output= output.substr(0,output.length-1);//remove the last element of a value
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:fun1(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}

