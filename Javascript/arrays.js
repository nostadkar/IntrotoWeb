var numbers = [10,51,30,50,40];


function findMax(numSet){
	var max = 0
	
	for (i=0; i < numSet.length; i++){
		if(numSet[i] > max){
			max = numSet[i]
		}
	}
	return max;
}
	
function sumRange(numSet){
	var sum = 0
	
	for (i=0; i < numSet.length; i++){
		sum += numSet[i]
	}
	return sum;
	
	
}