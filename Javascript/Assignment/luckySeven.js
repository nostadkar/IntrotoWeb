
function validateItems() {
    clearErrors();
    var startingBet = document.forms["luckySeven"]["startingBet"].value;
	
    if (startingBet == "" || isNaN(startingBet)) {
        alert("Starting bet must be filled in with a number.");
        document.forms["luckySeven"]["startingBet"]
           .parentElement.className = "form-group has-error";
        document.forms["luckySeven"]["startingBet"].focus();
        return false;
    }
	
	var gameMoney = startingBet;
	//displaying results block and changing the button from play to play again.
   
	var roundCounter = 1;
	var rollCountResult = 0;
	var maxSumResult = startingBet;
	var rollCountAtMaxSumResult = 0;
	
	while (roundCounter > 0) {
		if(gameMoney > 0){
			var dice1 = rollDice();
			var dice2 = rollDice();
			
			if(dice1 + dice2 == 7){
				gameMoney += 4
			}else{
				gameMoney -= 1
			}
			
			roundCounter++
			
			if(gameMoney > maxSumResult){
				maxSumResult=gameMoney;
				rollCountAtMaxSumResult=roundCounter;
			
			
		}
		
		}else{
			rollCountResult = roundCounter-1;
			roundCounter=0;
		}
		
	}
	//gameover
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again";
	document.getElementById("startingBetResult").innerText = "$ " + startingBet;
	document.getElementById("rollCountResult").innerText = rollCountResult;
	document.getElementById("maxSumResult").innerText = "$ " + maxSumResult;
	document.getElementById("rollCountAtMaxSumResult").innerText = rollCountAtMaxSumResult;
   
   
   //

   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}

function rollDice(){
	return Math.floor(Math.random()* 6)+1;
}


function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["luckySeven"].elements.length; 
        loopCounter++) {
        if (document.forms["luckySeven"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["luckySeven"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["numberFun"]["num1"].value = "";
    document.forms["numberFun"]["num2"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus();
}


